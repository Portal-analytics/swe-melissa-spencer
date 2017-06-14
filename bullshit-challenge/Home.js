import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDsQIjPtaajliF0g5tV4D6UD4pX82kwomc",
  authDomain: "chat-app-6d45f.firebaseapp.com",
  databaseURL: "https://chat-app-6d45f.firebaseio.com",
  projectId: "chat-app-6d45f",
  storageBucket: "chat-app-6d45f.appspot.com",
  messagingSenderId: "790178067790"
};
firebase.initializeApp(config);

let readData = firebase.database().ref();

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Spencer',
      inputMessage: '',
      message_list: []
    }

    this._updateMessage = this._updateMessage.bind(this);
    this._addMessage = this._addMessage.bind(this);
  }

  componentWillMount() {
    readData.on('value', (snapshot) => {
      if (snapshot.val() != null) {
        this.setState({
          ...this.state,
          message_list: snapshot.val().message_list,
        })
      }
    })
  }

  _updateMessage = (text) => {
    this.setState({
      ...this.state,
      inputMessage: text
    });
  }

  _addMessage = () => {
    let newMessageList = this.state.message_list;
    let newMessage = { message: this.state.inputMessage + "  " + new Date().toTimeString().slice(0, 5), user: this.state.user };
    newMessageList.unshift(newMessage);

    //this.refs.newQuoteInput.clear();
    this.setState({
      ...this.state,
      message_list: newMessageList,
      inputMessage: ''
    });

    firebase.database().ref().set({
      message_list: this.state.message_list
    });
  }

  render() {

    return (
      <View style={styles.home_container}>
        <Text style={styles.header}>
          {this.state.user}
        </Text>
        <Text style={styles.inputLabel}>Enter Message</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          ref="newMessageInput"
          value={this.state.inputMessage}
          onChangeText={(text) => this._updateMessage(text)}
          onSubmitEditing={() => this._addMessage()}
        />
        <ScrollView>
          {this.state.message_list != null &&
            this.state.message_list.map((message) => {
              if (message.user == this.state.user) {
                return (
                  <View>
                    <Text style={styles.message}>
                      {message.message}
                    </Text>
                    <Text style={styles.user}>
                      {message.user}
                    </Text>
                  </View>
                );
              }
              else {
                return (
                  <View>
                    <Text style={styles.other_message}>
                      {message.message}
                    </Text>
                    <Text style={styles.other_user}>
                      {message.user}
                    </Text>
                  </View>
                );
              }
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
  },

  message: {
    fontSize: 20,
    textAlign: 'right',
  },

  user: {
    fontSize: 15,
    textAlign: 'right',
  },

  other_message: {
    fontSize: 20,
    textAlign: 'left',
  },

  other_user: {
    fontSize: 15,
    textAlign: 'left',
  },

  inputLabel: {
    height: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Home;
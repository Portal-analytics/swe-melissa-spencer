import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Spencer',
      inputMessage: '',
      messages: []
    }

    this._updateMessage = this._updateMessage.bind(this);
    this._addMessage = this._addMessage.bind(this);
  }

  _updateMessage = (text) => {
    this.setState({
      ...this.state,
      inputMessage: text
    });
  }

  _addMessage = () => {
    let newMessageList = this.state.messages;
    let newMessage = { message: this.state.inputMessage, time: new Date().toTimeString().slice(0, 5) };
    newMessageList.unshift(newMessage);

    //this.refs.newQuoteInput.clear();
    this.setState({
      ...this.state,
      messages: newMessageList,
      inputMessage: ''
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
        {this.state.messages.map((message) => {
          return (
            <View>
              <Text style={styles.message}>
                {message.message}
              </Text>
              <Text style={styles.time}>
                {message.time}
              </Text>
            </View>
          )
        }
        )}
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

  time: {
    fontSize: 15,
    textAlign: 'right',
  },

  inputLabel: {
    height: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Home;
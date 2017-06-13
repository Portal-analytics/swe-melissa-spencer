import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <Text style={styles.header}>
        Home
    </Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});

export default Home;
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends  Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My First try!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

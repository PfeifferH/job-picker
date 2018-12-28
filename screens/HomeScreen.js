import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Find a job that's right for you</Text>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff'
  },
  input: {
    margin: 20,
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center'
  }
})
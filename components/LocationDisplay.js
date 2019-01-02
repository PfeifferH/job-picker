import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native'

export class LocationDisplay extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}></View>
        <TextInput style={styles.input} value={this.props.value} onChangeText={this.props.onChangeText} />
        <TouchableHighlight style={styles.text} onPress={() => console.log('l')}>
          <Text>╳</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row'
  },
  input: {
    width: '60%',
    textAlign: 'center'
  },
  text: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    width: '20%'
  }
})
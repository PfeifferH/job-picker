import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

export class LocationDisplay extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}></View>
        <TextInput style={styles.input} value={this.props.value} onChangeText={this.props.onChangeText} />
        <TouchableHighlight style={styles.text} activeOpacity={0.5} underlayColor={Colors.buttonHighlight} onPress={() => this.props.remove()}>
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
    borderRadius: 10,
    height: '100%',
    width: '20%',
  }
})
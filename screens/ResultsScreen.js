import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'
import { getResults } from '../Scraper'

export class ResultsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: getResults(this.props.navigation.state.params)
    }  
    
  }

  render() {
    return (
      <Text>{this.state.results}</Text>
    )
  }
}

const styles = StyleSheet.create({
  
})
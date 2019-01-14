import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'
import { getResults } from '../Scraper'

export class ResultsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: {},
      currentJob: {}
    }  
    
    this.setResults.bind(this)
  }

  setResults = async () => {
    results = await getResults(this.props.navigation.state.params)
    if(results) {
      for(i in results) {
        if(i == 0) this.setState({ currentJob: results[i] })
        break
      }
      this.setState({ results: results })
    }
  }
  
  componentDidMount() {
    this.setResults()
  }

  render() {
    return (
      <Text></Text>
    )
  }
}

const styles = StyleSheet.create({
  
})
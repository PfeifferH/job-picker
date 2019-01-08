import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'
import { getResults } from '../Scraper'

export class ResultsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: {}
    }  
    
    this.setResults.bind(this)
  }

  setResults = async () => {
    results = await getResults(this.props.navigation.state.params)
    if(results) {
      this.setState({ results: results })
    }
  }
  
  componentDidMount() {
    this.setResults()
  }

  render() {
    console.log(this.state.results)
    return (
      <Text></Text>
    )
  }
}

const styles = StyleSheet.create({
  
})
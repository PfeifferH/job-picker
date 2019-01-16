import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { ResultsDisplay } from '../components/ResultsDisplay'
import Colors from '../constants/Colors'
import { getResults } from '../Scraper'

export class ResultsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results: [],
      currentJob: {}
    }  
    
    this.setResults.bind(this)
  }

  setResults = async () => {
    results = await getResults(this.props.navigation.state.params)
    if(results) {
      let resultsList = []
      for(i in results) {
        resultsList.push(results[i])
      }
      this.setState({ results: resultsList })
    }
  }
  
  componentDidMount() {
    this.setResults()
  }

  render() {
    console.log(this.state.results.length)
    return (
      <ImageBackground style={styles.image} source={require('../assets/images/job-picker-background-results.png')}>
        <View style={styles.header}>
          <Text style={styles.title}>Search Results</Text>
        </View>
        <ScrollView style={styles.list}>
          {
            this.state.results.map((result) => {
              return <ResultsDisplay key={result.decoratedJobPosting.jobPosting.id} result={result} />
            })
          }
        </ScrollView>       
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,    
  },
  list: {
    flexDirection: 'column',
    paddingTop: 30
  }
})
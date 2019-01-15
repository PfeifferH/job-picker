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
      <View>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,    
  },
  list: {
    flexDirection: 'column',
  }
})
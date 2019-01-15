import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Linking, StyleSheet, Image } from 'react-native'
import Colors from '../constants/Colors'
import { getResults } from '../Scraper'

export class ResultsDisplay extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const result = this.props.result
    console.log(result.viewJobCanonicalUrl)
    const title = result.decoratedJobPosting.jobPosting.title
    const imageLink = result.decoratedJobPosting.decoratedCompany.companyLogo !== undefined ? result.decoratedJobPosting.decoratedCompany.companyLogo.link : ''
    return (
      <TouchableHighlight onPress={() => { Linking.openURL(result.viewJobCanonicalUrl) }}>
        <View style={styles.container}>
          { imageLink
            ? <Image style={styles.image} source={{ uri: imageLink }} />
            : null
          }
          <Text>{title}</Text>
        </View>
      </TouchableHighlight> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 125,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100
  }
})
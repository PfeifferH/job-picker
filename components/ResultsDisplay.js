import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Linking, StyleSheet, Image } from 'react-native'
import Colors from '../constants/Colors'

export class ResultsDisplay extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    const result = this.props.result
    const title = result.decoratedJobPosting.jobPosting.title
    const company = result.decoratedJobPosting.decoratedCompany !== undefined ? result.decoratedJobPosting.decoratedCompany.canonicalName : 'Anonymous'
    const location = result.decoratedJobPosting.cityState
    const imageLink = result.decoratedJobPosting.decoratedCompany !== undefined && result.decoratedJobPosting.decoratedCompany.companyLogo !== undefined ? result.decoratedJobPosting.decoratedCompany.companyLogo.link : ''
    return (
      <TouchableHighlight style={styles.touch} activeOpacity={0.5} underlayColor={Colors.buttonHighlight} onPress={() => { Linking.openURL(result.viewJobCanonicalUrl) }}>
        <View style={styles.container}>
          { imageLink
            ? <Image style={styles.image} source={{ uri: imageLink }} />
            : <Image style={styles.image} source={{ uri: "https://www.linkedin.com/scds/common/u/images/themes/katy/ghosts/company/ghost_company_80x80_v1.png" }} />
          }
          <View style={styles.cardText}>
            <Text style={[styles.text, { fontWeight: 'bold'}]}>{title}</Text>
            <Text style={styles.text}>{company}</Text>
            <Text style={styles.text}>{location}</Text>
          </View>
        </View>
      </TouchableHighlight> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  cardText: {
    flexDirection: 'column',
    paddingLeft: 25,
    flex: 1
  },
  text: {
    flex: 1,
    flexWrap: 'wrap'
  },
  touch: {
    borderRadius: 10,
    width: "95%",
    alignSelf: 'center',
    paddingBottom: 20
  }
})
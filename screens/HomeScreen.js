import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'

export class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params ? this.props.navigation.state.params : {
      searchString: '',
      locations: ['Worldwide'],
      excludedLocations: [],
      salary: '',
      duration: '',
      start: ''
    }  
    
  }
  
  componentWillReceiveProps(nextProps) {
    if(!(nextProps.navigation.state.params === undefined || nextProps.navigation.state.params === this.state)) {
      this.setState(nextProps.navigation.state.params)
    }
  }

  updateLocation(e) {
    let locations = this.state.locations
    locations[0] = e
    this.setState({ locations: locations })
  }

  enterSearch() {
    if (this.state.locations.length < 1 || this.state.locations.indexOf('') !== -1) {
      Alert.alert('Error', 'Please select a valid location', [{text: 'OK'}])
      return
    } else {
      this.props.navigation.navigate('Results', this.state)
    }
  }

  render() {
    return (
      <ImageBackground style={styles.image} source={require('../assets/images/job-picker-background-main.png')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Find a job</Text>
          </View>
        
          <TextInput style={styles.input} placeholder='Keyword(s)' value={this.state.searchString} onChangeText={(e) => this.setState({ searchString: e })} />
      
          <TextInput style={styles.input} placeholder='Location' value={this.state.locations[0]} onChangeText={(e) => this.updateLocation(e)} />

          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Filters" onPress={() => this.props.navigation.navigate('Filters', this.state)}></Button>
          </View>

          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Search" onPress={() => this.enterSearch()}></Button>
          </View>

        </View>
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
  container: {
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
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
  text: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    margin: 20,
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 10
  },
  button: {
    borderRadius: 10,
    margin: 20
  }
})
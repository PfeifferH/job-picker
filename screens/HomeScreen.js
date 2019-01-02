import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'

export class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = this.props.navigation.state.params ? this.props.navigation.state.params : {
      searchString: '',
      location: '',
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

  render() {
    return (
      <ImageBackground style={styles.image} source={require('../assets/images/job-picker-background-main.png')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Find a job</Text>
          </View>
        
          <TextInput style={styles.input} placeholder='Keyword(s)' value={this.state.searchString} onChangeText={(e) => this.setState({ searchString: e })} />
      
          <TextInput style={styles.input} placeholder='Location' value={this.state.location} onChangeText={(e) => this.setState({ location: e})} />

          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Filters" onPress={() => this.props.navigation.navigate('Filters', this.state)}></Button>
          </View>

          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Search" onPress={() => console.log("Pressed")}></Button>
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
import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
export class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      location: ''
    }  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Find a job</Text>
        </View>
      
        <TextInput style={styles.input} placeholder='Keyword(s)' value={this.state.searchString} onChangeText={(e) => this.setState({ searchString: e })} />
     
        <TextInput style={styles.input} placeholder='Location' value={this.state.location} onChangeText={(e) => this.setState({ location: e})} />

        <View style={styles.button}>
          <Button color={Colors.buttonColor} title="Filters"></Button>
        </View>

        <View style={styles.button}>
          <Button color={Colors.buttonColor} title="Search"></Button>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
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
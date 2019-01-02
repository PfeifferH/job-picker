import React, { Component } from 'react'
import { View, Button, TextInput, StyleSheet, ImageBackground } from 'react-native'
import Colors from '../constants/Colors'

export class FilterScreen extends Component {

  constructor(props) {
    super(props)

    this.state = this.props.navigation.state.params
  }

  addLocation(type) {
    let locations = type === 0 ? this.state.locations : this.state.excludedLocations
    locations.push('')
    if (type === 0) {
      this.setState({ locations: locations })
    } else {
      this.setState({ excludedLocations: locations })
    }
  }

  updateLocationValue(type, e, index) {
    let locations = type === 0 ? this.state.locations : this.state.excludedLocations
    locations[index] = e
    if (type === 0) {
      this.setState({ locations: locations })
    } else {
      this.setState({ excludedLocations: locations })
    }
  }

  render() {
    console.log(this.state)
    return (
      <ImageBackground style={styles.image} source={require('../assets/images/job-picker-background-filters.png')}>
        <View style={styles.container}>

          {/* 
            Filter out locations
            Search for salaries
            Start date
            duration
          */}

          <TextInput style={styles.input} placeholder='Salary' value={this.state.salary} onChangeText={(e) => this.setState({ salary: e })} />
          <TextInput style={styles.input} placeholder='Duration' value={this.state.duration} onChangeText={(e) => this.setState({ duration: e })} />
          <TextInput style={styles.input} placeholder='Start Date' value={this.state.start} onChangeText={(e) => this.setState({ start: e })} />
          
          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Add Location" onPress={() => this.addLocation(0)} />
          </View>
          
          {this.state.locations.map((location) => {
            const index = this.state.locations.indexOf(location)
            return <TextInput style={styles.input} key={index} value={location} onChangeText={(e) => this.updateLocationValue(0, e, index)} />
          })}

          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Exclude Location" onPress={() => this.addLocation(1)} />
          </View>

          {this.state.excludedLocations.map((location) => {
            const index = this.state.excludedLocations.indexOf(location)
            return <TextInput style={styles.input} key={index} value={location} onChangeText={(e) => this.updateLocationValue(1, e, index)} />
          })}
          
          <View style={styles.button}>
            <Button color={Colors.buttonColor} title="Apply Filters" onPress={() => this.props.navigation.navigate('Home', this.state)} />
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
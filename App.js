import React from 'react';
import { Platform, StatusBar, StyleSheet, View, ImageBackground } from 'react-native';
import { Asset, Font, Icon } from 'expo';
import { HomeScreen } from './screens/HomeScreen';
import Colors from './constants/Colors';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('./assets/images/job-picker-background-main.png')}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.statusBarColor} />
          <HomeScreen />   
        </ImageBackground> 
      </View>
    );
  }


  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0091ca',
    paddingTop: Platform.OS == "ios" ? 0 : StatusBar.currentHeight,
    fontFamily: 'Roboto'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});

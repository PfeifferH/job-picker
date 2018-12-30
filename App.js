import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Asset, Font, Icon } from 'expo';
import { HomeScreen } from './screens/HomeScreen';
import { FilterScreen } from './screens/FilterScreen'
import Colors from './constants/Colors';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Filters: FilterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTransparent: true
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
     
  )}


  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
        require('./assets/images/job-picker-background-main.png')
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
});

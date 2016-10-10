import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SplashScreen extends Component {
  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Text onPress={Actions.home} style={styles.welcome}>
          splashscreen
        </Text>
      </View>
    );
  }
  componentWillMount(){
    debugger;
  }

  componentDidMount(){
debugger;
  }
  componentWillReceiveProps(){
debugger;
  }

  shouldComponentUpdate(nextProps, nextState){
    debugger;
    return true; // by default it's true, for good performance compare current props and next props and return boolean accordingly.
  }

  componentWillUpdate(){
     debugger;
  }

  componentDidUpdate(){
debugger;
  }

  componentWillUnmount(){
  debugger;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


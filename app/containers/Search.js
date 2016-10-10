
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Search extends Component {
	goToCategoryPage(link){
Actions.categorypage({link:link});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.goToCategoryPage('collection/new-arrivals-for-men')}}>Men</Text>
        <Text onPress={()=>{this.goToCategoryPage('collection/t-shirts-for-women')}}>Women</Text>
      </View>
    );
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
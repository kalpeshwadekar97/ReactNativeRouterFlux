/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

class Wishlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
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


const mapStateToProps = (state) => {
    debugger;
     return {
     products: state.wishlist.wishlistProducts
     };
  };

   const mapDispatchToProps = (dispatch) => {
    debugger;
     return {
      getWishlist: () => {
        
         dispatch(getWishlistAction());
       },
     };
   };

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist);


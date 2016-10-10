import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {makeItDone} from '../actions/CategoryPage';

class ProductPage extends Component {
onStep2Done(){
this.props.makeItDone();
}
  render() {
    debugger;
    var {done,makeItDone} = this.props;
    return (
      <View style={styles.container}>
      <Image source={{uri: this.props.link}} style={{width:350,height:430}}/>
      <Text onPress={this.onStep2Done.bind(this)}>step 2 done? -> {this.props.done?'done':'not done'}</Text>
        <Text onPress={Actions.home} style={styles.welcome}>
          GO TO HOME PAGE
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
    if(this.props.done==nextProps.done){
      return false;
    }
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
const mapStateToProps = (state) => {
    debugger;
     return {
     done: state.categoryPage.done
     };
  };

   const mapDispatchToProps = (dispatch) => {
    debugger;
     return {
       makeItDone: () => {
         dispatch(makeItDone());
       },
     };
   };
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);


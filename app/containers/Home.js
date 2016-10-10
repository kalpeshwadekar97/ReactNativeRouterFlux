import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  goToCategoryPage(link){
    debugger;
Actions.categorypage({link:link});
  }
  goToProductPage(link){
Actions.productpage({link:link});
  }
  goToListViewPage(link){
Actions.ListViewWithoutRedux({link:link});
  }
goBack(){
Actions.pop({refresh:{porpsToRefresh:true}});
}
openModal(){
  Actions.ModalPage({error: "Network failed...", hide: false})
}
  render() {
    debugger;
    return (
      <View style={styles.container}>
        <Text onPress={()=>{this.goToCategoryPage('collection/new-arrivals-for-men')}}>Men</Text>
        <Text onPress={()=>{this.goToCategoryPage('collection/t-shirts-for-women')}}>Women</Text>
        <Text onPress={()=>{this.goToProductPage('https://images.bewakoof.com/t320/rock-and-roll-men-s-longline-t-shirts--printed-1472955465.jpg')}}>product 1</Text>
        <Text onPress={()=>{this.goToProductPage('https://images.bewakoof.com/t320/stone-grey-women-s-plain-3-4-sleeve-t-shirts-1472955442.jpg')}}>product 2</Text>
        <Text onPress={()=>{this.goToListViewPage('collection/new-arrivals-for-men')}}>ListView 1</Text>
        <Text onPress={()=>{this.goToListViewPage('collection/t-shirts-for-women')}}>ListView 2</Text>
        <Text onPress={()=>{this.goBack()}}>BACK</Text>
        <Text onPress={()=>{this.openModal()}}>OPEN MODAL</Text>
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


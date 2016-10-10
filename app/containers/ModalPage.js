import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import {Actions} from 'react-native-router-flux';
import SplashScreen from './SplashScreen';

class Mom extends Component{
  render(){
    return <View><Text>MOM</Text></View>
  }
}

export default class ModalPage extends Component {

  constructor(props) {
    super(props);
    this.state = {modalVisible: false,pop:false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

goToHome(){
  // console.warn('abcde');
  // Actions.home
  this.setState({pop:true});
}

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <Text onPress={()=>{this.goToHome()}}>Home</Text>
          {
            this.state.pop == true ? <View>
            <SplashScreen /> 
            </View> : <Mom />
          }

         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
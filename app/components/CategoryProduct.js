import React, { Component } from 'react';
import {View, Text,Alert,Image} from 'react-native';
// import ResizableImageView from './ResizableImageView';

export default class CategoryProduct extends Component {
	
constructor(props) {
  super(props);
}

  render() {
	
      return (
      	 <View>
      	 <Image source={{uri:`https://images.bewakoof.com/t320/${this.props.product[this.props.productObjKeys.display_image]}`}} style={{width:200,height:300}}/>
      	 <Text>500</Text>
      	 </View>
      );
  }
}
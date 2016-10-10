import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CATEGORY_URL,{getGetRequestParams} from '../ApiUrls';
import {COLLECTION_URL} from '../ApiUrls';
import {groupItems} from '../js/GridCreator';
import { connect } from 'react-redux';


var array = [];
class ListViewWithoutRedux extends Component {
  
fetchProducts(link) {
    var url,responseStatus;
  var catOrColl = link.split('/');
  if(catOrColl[0]=='collection'){
    url=COLLECTION_URL+catOrColl[1]; 
  }else{
    url=CATEGORY_URL+catOrColl[1];
  }
  var header = getGetRequestParams();
  try{
      fetch(url+'?product_fields=name,price,display_image', header).then((response)=>{
         response.status>=200 && response.status<300 ? responseStatus=true : responseStatus=false;
         return response.json();
      }).then((responseJson)=>{
        if(responseStatus){
          
        let products = responseJson.products;
        products.splice(0,1);
        let productsGroup = groupItems(products, 2);
        this.setState({dataSource: this.state.dataSource.cloneWithRows(
      productsGroup
    )});
        //dispatch(fetchCategoryProducts(products));
      }else{
      let error = JSON.stringify(responseJson);
      throw error;
      }
      });
    }catch(error){
        // never use alert, use your toast layout once developed
        Alert.alert(error);
    }
  
  
}

constructor() {
    super();
    array.length=0;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(array),
    };
  }
onHomePress(){
	Actions.home;
}
renderProductRow(rowData){
// return <Image source={{uri:img}} style={{width:200,height:300}}/>
var productLayout = rowData.map(function(item, index) {
	let img = 'https://images.bewakoof.com/t320/'+rowData[index][2];
        return  <CategoryProduct key={index} product={img}/>
      });
      return (
        <View style={styles.group}>
          {productLayout}
        </View>
      );
}
  render() {
    debugger;
    return (
		<View style={{flex:1,backgroundColor:'white'}}>
        <Text style={styles.sortby} onPress={Actions.home}>Home</Text>

    	<ScrollView>

      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={this.renderProductRow}
      />
      </ScrollView>
      </View>
    );
  }
  componentWillMount(){
    debugger;
  }

  componentDidMount(){
debugger;
this.fetchProducts(this.props.link);
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


class CategoryProduct extends Component{
	render() {
	
      return (
      	 <View>
      	 <Image source={{uri:this.props.product}} style={{width:200,height:300}}/>
         <View style={{flexDirection:'row'}}>
         <Text>500</Text>
         <Text>Wish</Text>
         </View>
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
  sortby: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 10,
    color: 'white',
    fontSize: 20
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#e6e6e6'
  },
});
const mapStateToProps = (state) => {
    debugger;
     return {
     wishlist: state.wishlistPage.categoryProductData
     };
  };

   const mapDispatchToProps = (dispatch) => {
    debugger;
     return {
      addToWishlist: (productId) => {
        
         dispatch(addToWishlistAction(productId));
       },
       removeFromWishlist: (productId) => {
        
         dispatch(removeFromWishlistAction(productId));
       },
     };
   };

export default connect(mapStateToProps,mapDispatchToProps)(ListViewWithoutRedux);

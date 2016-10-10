import React, { Component } from 'react';
import {ListView, View, Text, StyleSheet, Dimensions,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {categoryPageAction} from '../actions/CategoryPage';
// import ResizableImageView from '../components/ResizableImageView';
import CategoryProduct from '../components/CategoryProduct';
import {fetchProducts,sortby} from '../actions/CategoryPage';
// import PlatformOs from '../utility/PlatformOs';
import {groupItems} from '../js/GridCreator';
import {Actions} from 'react-native-router-flux';

var productObjKeys = {
  display_image:2,
  price:1
};

class CategoryPage extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.props.products.length = 0;
  }
    renderGroup(group) {
      // CategoryProduct Component - items of GridView
      var productLayout = group.map(function(item, index) {
        return  <CategoryProduct key={index} product={item} productObjKeys={productObjKeys}/>
      });
      return (
        <View style={styles.group}>
          {productLayout}
        </View>
      );
    }

    onSortByPress(){
      Actions.home
      //this.props.sortBy(this.props.products);
      //this.props.products = this.props.products.sort(function(a,b) {return (a[productObjKeys.price] > b[productObjKeys.price]) ? 1 : ((b[productObjKeys.price] > a[productObjKeys.price]) ? -1 : 0);} ); 
    }

    render(){
      debugger;
        var {products,categoryApiCall,sortBy} = this.props;
       
        var groups = groupItems(this.props.products, 2);
        var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        

        return (
        <View style={{flex:1,backgroundColor:'white'}}>
        <Text style={styles.sortby} onPress={Actions.home}>Home</Text>
        <Text style={styles.sortby} onPress={Actions.ModalPage({error: "Network failed...", hide: false})}>OPEN MODAL</Text>
        <Text onPress={Actions.search}>Search</Text>
        <ScrollView>
          <ListView
          enableEmptySections={true}
          renderRow={this.renderGroup}
          dataSource={dataSource.cloneWithRows(groups)}
        />
        </ScrollView>
        </View>
        );
    }

  componentWillMount(){
    debugger;
    //this.props.categoryApiCall(null);
  }

  componentDidMount(){
debugger;
    this.props.categoryApiCall(this.props.link);
  }
  componentWillReceiveProps(){
debugger;
  }

  shouldComponentUpdate(nextProps, nextState){
    debugger;
    if(this.props.products==nextProps.products){
    //this.props.categoryApiCall(this.props.link);

      return false;
    }
    return true; // by default it's true, for good performance compare current props and next props and return boolean accordingly.
  }

  componentWillUpdate(a,b){
    console.log(a,b);
     debugger;
  }

  componentDidUpdate(){
debugger;
  }

  componentWillUnmount(){
    debugger;
    //this.props.categoryApiCall(null);
  }
}


var styles = StyleSheet.create({
  product: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
    margin:5
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#e6e6e6'
  },
  sortby: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 10,
    color: 'white'
  }
});

  const mapStateToProps = (state) => {
    debugger;
     return {
     products: state.categoryPage.categoryProductData
     };
  };

   const mapDispatchToProps = (dispatch) => {
    debugger;
     return {
      sortBy: (products) => {
        
         dispatch(sortby(products));
       },
       categoryApiCall: (link) => {
        
         dispatch(fetchProducts(link));
       },
       addToWishlist:()=>{
        
       }
     };
   };

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);

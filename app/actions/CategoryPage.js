export const FETCH_CATEGORY_PRODUCTS = 'fetch_category_products';
export const MAKE_IT_DONE  = 'make_it_done';
import CATEGORY_URL,{getGetRequestParams} from '../ApiUrls';
import {COLLECTION_URL} from '../ApiUrls';
import {Alert} from 'react-native';
var productObjKeys = {
  display_image:2,
  price:1
};
export const fetchCategoryProducts =  (products) => {
  return {
    type: FETCH_CATEGORY_PRODUCTS,
    data: {
      products:products
    }
  };
};

export function sortby(products){
  var productArray = products;
  return function(dispatch){
   var sortedArray = productArray.sort(function(a,b) {return (a[productObjKeys.price] > b[productObjKeys.price]) ? 1 : ((b[productObjKeys.price] > a[productObjKeys.price]) ? -1 : 0);} ); 
   var slicedArray = sortedArray.slice();
    dispatch(fetchCategoryProducts(slicedArray));   
  }
}

export function fetchProducts(link) {
  return function(dispatch){
  
    if(link == null){
      var emptyArray = [];
      dispatch(fetchCategoryProducts(emptyArray));
    }else{
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
        dispatch(fetchCategoryProducts(products));
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
  }
}
 
export const makeItDone =  () => {
  return {
    type: MAKE_IT_DONE,
    done: true 
  };
};

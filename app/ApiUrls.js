// import { getAccessToken } from './GlobalStorage';

const MAIN_URL = 'https://www.bewakoof.com/v1/';
const STAGING_URL = 'https://staging.bewakoof.com/v1/';
const SNEHAL_URL = 'http://192.168.1.136:3000/v1/';
let urlToUse = MAIN_URL;

export const STATICS = urlToUse+'statics?fields=new_home_box,mobile_slider,images,get_menu,contact_us,card_details,bottom_menu,return_policy,delivery,cancel_reasons_for_user,blog_path,payment_offers,ratings';
export const PRODUCTS = urlToUse+'products/';
export const BAG = urlToUse+'carts';
export const WISHLIST = urlToUse+'wishlists/';
export const LOGIN = urlToUse+'authentication';
export const CATEGORY_URL = urlToUse +'categories/';
export const COLLECTION_URL = urlToUse +'collections/';
export const CHECKPIN = urlToUse + "courier_locations?filters=";

export function getCustomStaticUrl(params){
	return  urlToUse+'statics?fields='+params;
}



export function getGetRequestParams(){
  return {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'API-TOKEN': 'ZmQ2ODBhM2UzMzc0Zjg1YTExZGZmZTM0MTRmNzYyMmY6YTMyODBiM2YtYjczZi00OGFkLWFlZGMtNTVmOTNlYjk4ZGI3'
      // , 'ACCESS_TOKEN': getAccessToken()
      }
    };
}

export function getPostRequestParams(body){
  var requestBody = JSON.stringify(body);
  return {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'API-TOKEN': 'ZmQ2ODBhM2UzMzc0Zjg1YTExZGZmZTM0MTRmNzYyMmY6YTMyODBiM2YtYjczZi00OGFkLWFlZGMtNTVmOTNlYjk4ZGI3'
      // , 'ACCESS_TOKEN': getAccessToken()
      },
      body: requestBody
    };
}

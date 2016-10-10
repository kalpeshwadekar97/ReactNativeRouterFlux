import {
    Router,
    Scene,
    Actions,
    Modal
} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid
} from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Home from './containers/Home';
import SplashScreen from './containers/SplashScreen';
import CategoryPage from './containers/CategoryPage';
import ProductPage from './containers/ProductPage';
import ToolBar from './components/toolbar';
import ToolBar2 from './components/toolbar2';
import ListViewWithoutRedux from './containers/ListViewWithoutRedux';
import ModalPage from './containers/ModalPage';
import Search from './containers/Search';



const store = compose(
  applyMiddleware(ReduxThunk)
)(createStore)(reducers);

const navbar = <ToolBar search={true} cart={true} menu={true}/>;

const getNavBar = () => {
	return <View style={{flexDirection:'row'}}>
        <Text style={{margin:5}}>
          Back
        </Text>
        <Text style={{margin:5}}>
          Bewakoof
        </Text>
        <Text style={{margin:5}}>
          Search
        </Text>
        <Text style={{margin:5}}>
          cart
        </Text>
      </View>
}
// --- Create it via Actions.create(), or it will be re-created for each render of your Router
// const scenes = Actions.create(
//   <Scene key="modal" component={Modal}>
//     <Scene key="root">
//         <Scene key="splashscreen" component={SplashScreen} initial={true} hideNavBar={true} />
//         <Scene key="home" component={Home} hideNavBar={true}/>
//         <Scene key="search" direction="vertical" >
//               <Scene key="searchModal" direction="vertical" component={Search} />
//               <Scene
//                 key="categorypage"
//                 hideNavBar={true}
//                 component={CategoryPage}
//               />
//               </Scene>
// 	    <Scene key="categorypage" component={CategoryPage} hideNavBar={true} stateCopy={this.props.stateCopy}/>
// 	    <Scene key="productpage" component={ProductPage} hideNavBar={true}/>
//       <Scene key="ListViewWithoutRedux" component={ListViewWithoutRedux} hideNavBar={true}/>
      

//     </Scene>
//     <Scene key="ModalPage" component={ModalPage} />
//      </Scene>
// );
   




// --- Create connected Router if you want dispatch() method.
// --- Or you can just use vanilla Router
//const myConnectedRouter = connect()(Router);

class AppNavigator extends Component {
	handleBackButton(){
    if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
      this._navigator.pop();
      return true;
    }
    return false;
  }
  render() {
    var {stateCopy} = this.props;
    debugger;
    return (
      <Provider store={store}>
                <Router >
                <Scene key="modal" component={Modal}>
    <Scene key="root">
        <Scene key="splashscreen" component={SplashScreen} initial={true} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true} panHandlers={null}/>
        <Scene key="search" direction="vertical" >
              <Scene key="searchModal" direction="vertical" component={Search} />
              <Scene
                key="categorypage"
                hideNavBar={true}
                component={CategoryPage}
              />
              </Scene>
      <Scene key="categorypage" component={CategoryPage} hideNavBar={true} stateCopy={this.props.stateCopy}/>
      <Scene key="productpage" component={ProductPage} hideNavBar={true}/>
      <Scene key="ListViewWithoutRedux" component={ListViewWithoutRedux} hideNavBar={true} stateCopy={this.props.stateCopy}/>
      

    </Scene>
    <Scene key="ModalPage" component={ModalPage} />
     </Scene>
     </Router>
            </Provider>
    );
  }
  componentWillMount(){
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

  componentDidMount(){
    debugger;
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }

componentWillUnmount(){
  debugger;
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }
}
const mapStateToProps = (state) => {
    debugger;
     return {
     stateCopy:state
     };
  };
export default connect(mapStateToProps)(AppNavigator);


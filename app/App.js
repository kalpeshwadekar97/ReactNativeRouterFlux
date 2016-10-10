import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'
import AppNavigator from './AppNavigator';

const store = createStore(reducers,
  applyMiddleware(ReduxThunk)
  );

class App extends Component {

  render() {
  	debugger;
    return (
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
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
export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCtSFt9zLDCgfO5YY_MV9VBgXBxlyLG89k',
      authDomain: 'manager-7a0e5.firebaseapp.com',
      databaseURL: 'https://manager-7a0e5.firebaseio.com',
      projectId: 'manager-7a0e5',
      storageBucket: 'manager-7a0e5.appspot.com',
      messagingSenderId: '382102034877'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

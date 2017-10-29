import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

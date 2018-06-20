import React from 'react';
import thunk from 'redux-thunk'
import { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import Main from './components/containers/Main';
import { StyleSheet, Text, View } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

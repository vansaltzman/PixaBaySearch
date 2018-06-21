import React from 'react';
import thunk from 'redux-thunk'
import { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'
import Main from './components/containers/Main';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
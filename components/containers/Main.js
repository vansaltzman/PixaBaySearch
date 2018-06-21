import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'
import { View, Text } from 'react-native';
import PhotoListContainer from '../containers/PhotoList';
import PhotoDetail from '../containers/PhotoDetail';
import { createStackNavigator } from 'react-navigation';

export const Main = createStackNavigator(
  { Search: PhotoListContainer,
    PhotoDetail: PhotoDetail,
  },
  {
  initialRouteName: 'Search',
  }
)

function mapStateToProps(state) {
  return {
    list: state.list,
    keyword: state.list.keyword,
    selectedPhoto: state.list.selectedPhoto
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
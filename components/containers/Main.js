import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions'
import { View, Text } from 'react-native';
import PhotoListContainer from '../containers/PhotoList'
import Search from './Search'

// import PhotoDetail from './PhotoDetail';
// import PhotoList from './PhotoList';
// import Search from './Search';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    if (!this.props.list.selected) {
      return ( 
          <PhotoListContainer />
      )
    } else {
      return (
        // <PhotoDetail />
        <View>
        </View>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    search: state.search,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
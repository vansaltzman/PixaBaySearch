import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Text } from 'react-native-elements';

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      // <Overlay >
        <Text>
          Test
        </Text>
      //</Overlay>
     )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.list.photos,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PhotoDetail);
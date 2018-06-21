import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { Card, Text, List} from 'react-native-elements';

class PhotoDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    const {largeImageURL, user, imageHeight, imageWidth, tags} = this.props.selectedPhoto

    return ( 
      <Card
        containerStyle={{height: this.props.layout.height * 0.9}}
        image={{uri: largeImageURL}}
        title={`uploaded by user ${user}`}
      >
         <Text h5 style={{textAlign: 'center'}}> {`${imageHeight} x ${imageWidth}`} </Text>

         <Text h4> Tags </Text>
         <Text> {tags} </Text>
      </Card>
     )
  }
}

function mapStateToProps(state) {
  return {
    selectedPhoto: state.list.selectedPhoto,
    layout: state.list.layout
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PhotoDetail);
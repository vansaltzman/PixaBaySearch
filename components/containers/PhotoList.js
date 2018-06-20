import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { List, Tile } from 'react-native-elements';
import listReducer from '../../reducers/listReducer';
import PhotoListItem from '../PhotoListItem'

var {height, width} = Dimensions.get('window');

class PhotoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() { 


    return ( 
      <List containerStyle={styles.list}>
        <FlatList 
          numColumns={3}
          data={this.props.photos.map(photo => (
            {key: photo.id, preview: photo.previewURL}
          ))}
          renderItem={({ item }) => (
              <PhotoListItem photoStyle={styles.photo} preview={item.preview} />
          )}
        />
      </List>
     )
  }
}

const styles = StyleSheet.create({
  photo:{
    alignSelf: 'center',
    height: 66,
    width: width/3 * 0.95,
    marginRight: 5,
    marginBottom: 5,
  },
  list:{
    borderTopWidth: 0,
    borderBottomWidth: 0,
    margin: 5,
  }
})

function mapStateToProps(state) {
  return {
    photos: state.list.photos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer);
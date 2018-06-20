import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { List, Tile, ActivityIndicator } from 'react-native-elements';
import listReducer from '../../reducers/listReducer';
import PhotoListItem from '../PhotoListItem'
import Search from './Search';

var {height, width} = Dimensions.get('window');

class PhotoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <List>
        <FlatList
          contentContainerStyle={styles.list}
          ListHeaderComponent={() => <Search searchHandler={this.props.searchByKeyword}/>}
          ListFooterComponent={this.props.loading && <Text> Loading... </Text>}
          numColumns={3}
          data={this.props.photos.length > 0 ? this.props.photos.map(photo => (
            {key: photo.id, preview: photo.previewURL}
          )) : []}
          renderItem={({ item }) => (
              <PhotoListItem photoStyle={styles.photo} preview={item.preview} />
          )}
          ItemSeparatorComponent={() => (
            <View style={{width: '100%', height: 3, }} />
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
    width: width/3 * 0.97,
    marginLeft: 3
  },
  list:{
    borderTopWidth: 0,
    borderBottomWidth: 0,
  }
})

function mapStateToProps(state) {
  return {
    photos: state.list.photos,
    loading: state.list.loading
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PhotoListContainer);
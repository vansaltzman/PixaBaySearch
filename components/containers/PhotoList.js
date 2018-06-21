import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { FlatList, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { List, Tile, ActivityIndicator } from 'react-native-elements';
import { throttle } from 'lodash'
import PhotoListItem from '../PhotoListItem'
import Search from './Search';

class PhotoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const styles = StyleSheet.create({
      photo:{
        alignSelf: 'center',
        height: 66,
        width: this.props.layout ? this.props.layout.width/3 * 1 : 0,
        marginLeft: 3
      },
      list:{
        alignContent: 'center',
        width: this.props.layout.width,
        minHeight: this.props.layout.height,
        borderTopWidth: 0,
        borderBottomWidth: 0,
      }
    })

    return ( 
      <View
        onLayout={this.props.setLayout}
      > 
          <FlatList
            contentContainerStyle={styles.list}
            numColumns={3}
            ListHeaderComponent={() => (
              <Search 
                keyword={this.props.keyword} 
                loading={this.props.loadingSearch} 
                searchHandler={this.props.searchByKeyword}
              />
            )}
            ListFooterComponent={this.props.loadingPhotos && <Text> Loading... </Text>}
            data={this.props.photos.length > 0 ? this.props.photos.map(photo => (
              {key: photo.id, photoObj: photo}
            )) : []}
            renderItem={({ item }) => (
              <PhotoListItem photoStyle={styles.photo} photoObj={item.photoObj} showDetailHandler={this.props.showDetail} />
            )}
            ItemSeparatorComponent={() => (
              <View style={{width: '100%', height: 3, }} />
            )}
            onEndReached={()=> {
                let throttledLoad = throttle(this.props.loadMorePhotos, 10000)
                throttledLoad(this.props.keyword, this.props.page)
            }}
            onEndReachedThreshold={0.95}
          />
      </View>
     )
  }
}

function mapStateToProps(state) {
  return {
    photos: state.list.photos,
    loadingPhotos: state.list.loadingPhotos,
    loadingSearch: state.list.loadingSearch,
    page: state.list.currentPage,
    keyword: state.list.keyword,
    layout: state.list.layout,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PhotoListContainer);
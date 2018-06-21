import React from 'react';
import { Image, Text, TouchableHighlight } from 'react-native'

const PhotoListItem = ({ photoObj, photoStyle, showDetailHandler }) => {
  return(
    <TouchableHighlight underlayColor={'white'} onPress={()=> showDetailHandler(photoObj)}>
      <Image 
        style={photoStyle}
        source={{uri: photoObj.previewURL}}
        resizeMode="cover"
      />
    </TouchableHighlight>
  )
}

export default PhotoListItem
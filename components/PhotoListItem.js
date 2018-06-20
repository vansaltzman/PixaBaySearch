import React from 'react';
import { Image, Text } from 'react-native'

const PhotoListItem = ({ preview, photoStyle, showDetailHandler }) => {
  return(
      <Image 
        style={photoStyle}
        source={{uri: preview}}
        resizeMode="cover"
      />
  )
}

export default PhotoListItem
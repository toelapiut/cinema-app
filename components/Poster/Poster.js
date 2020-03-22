import React from 'react';
import {View, Text} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";


export const Poster = ({thumb, configurations}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;

  return (
    <View >
      <Text>Poster</Text>
      <ProgressiveImage
        resizeMode={'contain'}
        style={{width: 134.5, height: 180, borderRadius:5}}
        thumbnailSource={{uri: secureBaseUrl + posterSizes[0] + thumb}}
        imageSource={{uri: secureBaseUrl + posterSizes[4] + thumb}}
      />
    </View>
  )
};
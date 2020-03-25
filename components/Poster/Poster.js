import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";


export const Poster = ({thumb, configurations}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;
  let thumbnail = secureBaseUrl + posterSizes[0] + thumb;
  let source = secureBaseUrl + posterSizes[4] + thumb;


  return (
      <View>
        <Text>Poster</Text>
        <ProgressiveImage
          resizeMode={'contain'}
          style={{width: 134.5, height: 180, borderRadius:5}}
          thumbnailSource={{uri: thumbnail}}
          imageSource={{uri: source}}
        />
      </View>
  )
};
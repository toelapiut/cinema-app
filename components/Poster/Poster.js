import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";


export const Poster = ({thumb, configurations}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;
  let thumbnail = secureBaseUrl + posterSizes[0] + thumb;
  let source = secureBaseUrl + posterSizes[3] + thumb;


  return (
      <View>
        <Text style={{ lineHeight:5}}>Poster</Text>
        <ProgressiveImage
          resizeMode={'contain'}
          style={{width: 100, height: 140, borderRadius:1}}
          thumbnailSource={{uri: thumbnail}}
          imageSource={{uri: source}}
        />
      </View>
  )
};
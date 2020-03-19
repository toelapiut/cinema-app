import React from 'react';
import ProgressiveImage from "../ProgressiveImage";
import {View} from 'react-native';

export const Profile = ({focused}) => {
  return <View
    style={{
      height:27,
      width: 27,
      borderColor: focused ? '#fff' : 'transparent',
      borderWidth: 1,
      borderRadius: .5*27,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#000"
    }}
  >
    <ProgressiveImage
      resizeMethod='resize'
      style={{
        height:25,
        width: 25,
        borderRadius: .5*25,
        backgroundColor:"#000"
      }}
      thumbnailSource={{
        uri: `https://i.pinimg.com/originals/96/8c/31/968c31a4fdd199e26110ec93665784c3.jpg`,
      }}
      imageSource={{
        uri: 'https://i.pinimg.com/originals/96/8c/31/968c31a4fdd199e26110ec93665784c3.jpg',
      }}
    />
  </View>
};
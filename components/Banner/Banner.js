import React from 'react';
import {Text, View} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";
import {BannerWrapper} from "./styled";
import Layout from "../../constants/Layout";


export const Banner = ({thumb, configurations, numColumns}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;
  let thumbnail = secureBaseUrl + posterSizes[0] + thumb;
  let source = secureBaseUrl + posterSizes[4] + thumb;
  return(
    <BannerWrapper>
      <ProgressiveImage
        resizeMode={'contain'}
        style={{width: (Layout.window.width)/numColumns - 25, height: 210, borderRadius:4}}
        thumbnailSource={{uri: thumbnail}}
        imageSource={{uri: source}}
      />
    </BannerWrapper>
  )
};

Banner.defaultProps = {
  numColumns:2
};

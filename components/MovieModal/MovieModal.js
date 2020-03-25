import React from 'react';
import {Modal} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";
import {LinearGradient} from "expo-linear-gradient";
import {
  CloseWrapper,
  ContentWrapper,
  GenreText,
  ModelBody,
  ModelInnerWrapper,
  ModelWrapper,
  OverView,
  Title
} from "./styled";
import {EvilIcons} from '@expo/vector-icons';
import {TouchableWithoutFeedback} from "react-native-web";

export const MovieModal = ({isVisible, content:{genres, items}, onHandleClose, configurations}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;
  const {posterPath, title, name, overview, genreIds} = items;

  let thumbnail = secureBaseUrl + posterSizes[0] + posterPath;
  let source = secureBaseUrl + posterSizes[5] + posterPath;

  return (
    <ModelWrapper>
      <Modal
        onBackdropPress={() => {
        }}
        transparent={true}
        visible={isVisible}>
        <ModelBody>
          <ModelInnerWrapper>
            <CloseWrapper>
              <TouchableWithoutFeedback onPress={onHandleClose}>
                <EvilIcons name='close' size={20} color='#fff'/>
              </TouchableWithoutFeedback>
            </CloseWrapper>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.2)','rgba(0,0,0,0.5)', '#000', '#000', '#000', '#000']}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 350,
                zIndex: 1000,
                bottom: 0,
                width: 325,
                borderRadius: 15
              }}
            />
            <ProgressiveImage
              resizeMode={'contain'}
              style={{height: 480, width: 325, borderRadius: 15}}
              thumbnailSource={{uri: thumbnail}}
              imageSource={{uri: source}}
            />
            <ContentWrapper>
              <Title>{title || name}</Title>
              <GenreText>{genreIds.map((genre) => genres[genre]['name']).join('  |  ')} </GenreText>
              <OverView numberOfLines={8}>{overview}</OverView>
            </ContentWrapper>
          </ModelInnerWrapper>
        </ModelBody>
      </Modal>
    </ModelWrapper>
  )
};

MovieModal.defaultProps = {
  content: {}
};
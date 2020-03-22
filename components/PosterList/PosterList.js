import React from 'react';
import {FlatList, Text} from "react-native";
import Poster from "../Poster";
import {Separator, Title} from "../../theme/theme";
import {PostListWrapper} from './styled';

export const PosterList = ({title, items, list}) => {
  return (
    <PostListWrapper>
      <Title>{title}</Title>
      <FlatList
        style={{paddingLeft: 20}}
        data={list}
        horizontal={true}
        extraData={list}
        ItemSeparatorComponent={() => <Separator/>}
        ListFooterComponent={() => <Separator style={{width: 40}}/>}
        renderItem={({item}) => {
          const {posterPath} = items[item];
          return (
            <Poster
              thumb={posterPath}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </PostListWrapper>
  )
};
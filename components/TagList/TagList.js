import React from 'react';
import {FlatList} from "react-native";
import Tags from "../Tags";
import {Separator} from "../../theme/theme";
import {TagListWrapper} from './styled';

export const TagList = ({list, items}) => {
  return (
    <TagListWrapper>
      <FlatList
        style={{paddingLeft: 20, marginBottom:40}}
        data={list}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        extraData={list}
        ItemSeparatorComponent={() => <Separator style={{width: 5}}/>}
        ListFooterComponent={() => <Separator style={{width: 40}}/>}
        renderItem={({item}) => {
          const {name} = items[item];
          return (
            <Tags
              name={name}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </TagListWrapper>
  )
};
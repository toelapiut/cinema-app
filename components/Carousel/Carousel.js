import React from 'react';
import {FlatList} from "react-native";
import {Separator, Title} from "../../theme/theme";
import {CarouselWrapper} from './styled';
import CarouselItem from "../CarouselItem";

export const Carousel = ({title, items, list, config, genres}) => {
  return (
    <CarouselWrapper>
      <Title>{title}</Title>
      <FlatList
        style={{paddingLeft: 20, marginBottom:30}}
        data={list}
        horizontal={true}
        extraData={list}
        ItemSeparatorComponent={() => <Separator/>}
        ListFooterComponent={() => <Separator style={{width: 40}}/>}
        renderItem={({item}) => {
          const {posterPath, overview, title, name, genreIds} = items[item];
          return (
            <CarouselItem
              genreIds={genreIds}
              thumb={posterPath}
              config={config}
              genres={genres}
              name={name || title}
              overview={overview}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </CarouselWrapper>
  )
};
// <CarouselItem
//   configurations={configurations}
//   genres={genres}
//   season={item.season}
//   name={item.title}
//   thumb={posterPath}
// />

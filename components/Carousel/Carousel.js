import React, {useState} from 'react';
import {FlatList, Animated} from "react-native";
import {Separator, Title} from "../../theme/theme";
import {CarouselWrapper, DotWrapper} from './styled';
import CarouselItem from "../CarouselItem";
import Layout from "../../constants/Layout";

let POSITION = 310;
export const Carousel = ({title, items, list, config, genres}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, POSITION);
  return (
    <CarouselWrapper>
      <Title>{title}</Title>
      <FlatList
        style={{paddingLeft: 20, marginBottom: 30}}
        data={list}
        horizontal={true}
        snapToInterval={POSITION+10}
        snapToAlignment='start'
        decelerationRate={0}
        extraData={list}
        scrollEventThrottle={16}
        decelerateRate='fast'
        ItemSeparatorComponent={() => <Separator/>}
        ListFooterComponent={() => <Separator style={{width: 40}}/>}
        renderItem={({item}) => {
          const {posterPath, overview, title, name, genreIds} = items[item];
          return (
            <CarouselItem
              width={POSITION}
              genreIds={genreIds}
              thumb={posterPath}
              config={config}
              genres={genres}
              name={name || title}
              overview={overview}
            />
          )
        }}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }]
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <DotWrapper>
        {list.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 4,
                borderRadius: .5 * 10
              }}/>
          )
        })}
      </DotWrapper>
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

import React, {useState} from 'react';
import {FlatList, Animated} from "react-native";
import {Separator, Title} from "../../theme/theme";
import {CarouselWrapper, DotWrapper} from './styled';
import CarouselItem from "../CarouselItem";

let POSITION = 310;
let WIDTH = 320;

export const Carousel = ({title, items, list, config, genres}) => {
  const [start] = useState(0);
  const [end] = useState(list.length);

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, POSITION);

  return (
    <CarouselWrapper>
      <Title>{title}</Title>
      <FlatList
        style={{paddingLeft: 20, marginBottom: 30}}
        data={list}
        horizontal={true}
        snapToInterval={WIDTH}
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
            [{nativeEvent: {contentOffset: {x: scrollX}}}]
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <DotWrapper>
        {list.slice(start, end).map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          });

          let size = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [6, 8, 6],
            extrapolate: 'clamp'
          });

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: size,
                width: size,
                backgroundColor: '#595959',
                margin: 2,
                borderRadius: .5 * 8
              }}/>
          )
        })}
      </DotWrapper>
    </CarouselWrapper>
  )
};

import React from 'react';
import {FlatList, View, Text} from "react-native";
import {Poster} from "../Poster/Poster";


export const PosterList = ({title, list}) => {
  return(
    <View>
      <Text>{title}</Text>
      <FlatList
        data={list}
        numColumns={2}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => {
          console.log({ item });
          return (
            <Poster/>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
};
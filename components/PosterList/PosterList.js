import React from 'react';
import {FlatList, View, Text} from "react-native";
import {Poster} from "../Poster/Poster";


export const PosterList = ({title, list}) => {
  return(
    <View style={{flex:1}}>
      <Text>{title}</Text>
      <FlatList
        data={[]}
        numColumns={2}
        columnWrapperStyle={{
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        renderItem={({ item }) => <Poster

        /> }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
};
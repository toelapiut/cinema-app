import React from 'react';
import {ExploreWrap} from './styled';
import Header from "../../components/Header";
import {FlatList, RefreshControl, Text} from "react-native";
import List from "../List";
import {LinearGradient} from "expo-linear-gradient";

const sections = ['Latest', 'Tags','Trending', 'Recently', 'Top Rated', 'Upcoming', 'Popular', 'Now Playing']
export const ExploreScreen = ({trending, latest, config, onRefresh, genres, recent}) => {
  return (
    <ExploreWrap>
      <Header/>
      <LinearGradient
        colors={['#000', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)','transparent']}
        style={{
          position: 'absolute',
          left: 0,
          top: 50,
          right: 0,
          height: 25,
          zIndex: 1,
        }}
      />

      {trending.loading ? <Text>Loading</Text> : <FlatList
        data={sections}
        extraData={sections}
        renderItem={({item}) => <List
          config={config}
          trending={trending}
          latest={latest}
          genres={genres}
          recent={recent}
          item={item}
        />}
        // refreshing={false}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={false}
        //     onRefresh={onRefresh}
        //   />
        // }
        keyExtractor={(item, index) => index.toString()}
      />}
    </ExploreWrap>
  );
};

ExploreScreen.navigationOptions = {
  header: null,
  headerShown: false,
};

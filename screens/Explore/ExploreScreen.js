import React from 'react';
import {ExploreWrap} from './styled';
import Header from "../../components/Header";
import {FlatList, RefreshControl} from "react-native";
import List from "../List";

const sections = ['Recently', 'Trending', 'Top Rated', 'Upcoming', 'Popular', 'Now Playing']
export const ExploreScreen = ({trending, latest, config, onRefresh}) => {
  return (
    <ExploreWrap>
      <Header/>
      <FlatList
        data={sections}
        renderItem={({item}) => <List
          config={config}
          trending={trending}
          latest={latest}
          item={item}
        />}
        refreshing={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </ExploreWrap>
  );
};

ExploreScreen.navigationOptions = {
  header: null,
  headerShown: false,
};

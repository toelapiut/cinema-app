import React from 'react';
import {ExploreWrap} from './styled';
import Header from "../../components/Header";
import {FlatList, RefreshControl, Text} from "react-native";
import List from "../List";
import {LinearGradient} from "expo-linear-gradient";

const sections = ['Latest', 'Tags', 'Trending', 'Recently', 'Upcoming', 'On Air', 'Playing Now', 'Popular', 'Top Rated'];


export const ExploreScreen = ({
                                trending, latest, config, onRefresh, genres, recent, onAir, playingNow, popular, upcoming,
                                topRated
                              }) => {
  return (
    <ExploreWrap>
      <Header/>
      <LinearGradient
        colors={['rgba(0,0,0,9)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          top: 50,
          right: 0,
          height: 45,
          zIndex: 1,
        }}
      />

      {trending.loading ? <Text>Loading</Text> : <FlatList
        data={sections}
        extraData={sections}
        renderItem={({item}) => <List
          popular={popular}
          upcoming={upcoming}
          topRated={topRated}
          config={config}
          trending={trending}
          latest={latest}
          genres={genres}
          recent={recent}
          onAir={onAir}
          playingNow={playingNow}
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

import React, {useMemo} from 'react';
import {ExploreWrap} from './styled';
import Header from "../../components/Header";
import {FlatList, Text} from "react-native";
import List from "../List";
import {LinearGradient} from "expo-linear-gradient";
import MovieModal from "../../components/MovieModal";

const sections = ['Latest', 'Tags', 'Trending', 'Recently', 'Upcoming', 'On Air', 'Playing Now', 'Popular', 'Top Rated'];


export const ExploreScreen = ({
                                trending, latest, config, genres, recent, onAir, playingNow, popular, upcoming,
                                topRated, isVisible, content, onHandleClose, onHandleOpen, onHandleContent
                              }) => {

  const onPressHandler = (item) => {
    onHandleContent(item);
    onHandleOpen()
  };


  const memoFlatList = useMemo(() => {
    return (
      <FlatList
        data={sections}
        extraData={sections}
        renderItem={({item}) => <List
          onPressHandler={onPressHandler}
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
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }, [trending.loading]);

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

      {trending.loading ? <Text>Loading</Text> : memoFlatList}
      {isVisible && <MovieModal
        content={content}
        onHandleClose={onHandleClose}
        isVisible={isVisible}
      />}
    </ExploreWrap>
  );
};

ExploreScreen.defaultProps = {
  isVisible: false
}

ExploreScreen.navigationOptions = {
  header: null,
  headerShown: false,
};

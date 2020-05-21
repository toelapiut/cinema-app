import React from 'react';
import SearchHeader from "../../components/SearchHeader";
import {useSafeArea} from 'react-native-safe-area-context';
import {View, FlatList, Text} from 'react-native';
import TagList from "../../components/TagList";
import {Separator} from "../../theme/theme";
import {PostListWrapper} from "../../components/PosterList/styled";
import Banner from "../../components/Banner";
import {Title} from "../../components/CarouselItem/styled";
let numColumns=2
export const SearchScreen = ({genres, airing}) => {
  const insets = useSafeArea();
  console.log({airing})
  return (
    <View style={{paddingTop: insets.top, flex: 1}}>
      <SearchHeader/>
      {/*<TagList*/}
      {/*  styles={{marginBottom:10, position:'absolute', zIndex:100001, backgroundColor:'transparent'}}*/}
      {/*  items={genres}*/}
      {/*  list={Object.keys(genres)}*/}
      {/*/>*/}
      {!airing.loading ? <FlatList
        style={{paddingHorizontal: 20, paddingTop:0, position:'relative', zIndex:-100}}
        data={Object.keys(airing.results)}
        extraData={Object.keys(airing.results)}
        numColumns={numColumns}
        columnWrapperStyle={{
          marginBottom:10,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={()=><Title>Airing today.</Title>}
        ItemSeparatorComponent={() => <Separator/>}
        ListFooterComponent={() => <Separator style={{width: 40, height:50}}/>}
        renderItem={({item}) => {
          const {posterPath, name, title} = airing['results'][item];
          return (
            <Banner
              numColumns={numColumns}
              genres={genres}
              name={name || title}
              thumb={posterPath}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      /> :<Text>HELLO LOADING</Text>}
    </View>
  )
};
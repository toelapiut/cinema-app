import React from 'react';
import SearchHeader from "../../components/SearchHeader";
import { useSafeArea } from 'react-native-safe-area-context';
import {View} from 'react-native';

export const SearchScreen = () => {
  const insets = useSafeArea();
  return (
    <View style={{ paddingTop: insets.top, flex:1 }}>
      <SearchHeader/>
    </View>
  )
}
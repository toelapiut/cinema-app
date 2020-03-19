import React from 'react';
import {ExploreWrap} from './styled';
import Header from "../../components/Header";
export const ExploreScreen = () => {
  return (
    <ExploreWrap>
      <Header/>
    </ExploreWrap>
  );
};

ExploreScreen.navigationOptions = {
  header: null,
  headerShown: false,
};

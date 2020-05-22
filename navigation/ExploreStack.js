import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Explore from "../container/Explore";

const ExploreStack = createStackNavigator();

export const ExploreStackNavigator = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      options={{headerShown: false}}
      name={'Explore'}
      component={Explore}
    />
  </ExploreStack.Navigator>
)

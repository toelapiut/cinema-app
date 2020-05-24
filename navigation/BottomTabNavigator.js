import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import {routes} from './routes'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';


BottomTab.navigationOption = ({navigation}) => {
};

export default function BottomTabNavigator({navigation, route}) {
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        tabStyle: {
          borderColor: "transparent"
        },
      }}
    >
      {routes.map((route, index) => {
          console.log({route})
          return (
            <BottomTab.Screen
              key={index}
              name={route.name}
              component={route.component}
              tabBarOptions={{}}
              options={{
                title: route.title,
                tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={route.name}/>,
              }}
            />
          )
        }
      )}
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Cinema':
      return 'Cinema';
    case 'Profile':
      return 'Profile';
  }
}


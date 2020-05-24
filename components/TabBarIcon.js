import * as React from 'react';
import Colors from '../constants/Colors';
import HomeIcon from "./HomeIcon";
import SearchIcon from "./SearchIcon";
import SavedIcon from "./SavedIcon";
import Profile from "./Profile";

export default function TabBarIcon({name, focused}) {
  switch (name) {
    case'Explore':
      return <HomeIcon focused={focused}/>;
    case'Search':
      return <SearchIcon focused={focused}/>;
    case'Saved':
      return <SavedIcon focused={focused}/>;
    case'Profile':
      return <Profile focused={focused}/>
  }
}

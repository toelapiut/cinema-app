import LinksScreen from '../screens/LinksScreen';
import Search from "../container/Search";
import {ExploreStackNavigator} from "./ExploreStack";


export const routes = [
  {
    name: "Explore",
    component: ExploreStackNavigator,
    title: 'Explore',
  },
  {
    name: "Search",
    component: Search,
    title: 'Search',
  },
  {
    name: "Saved",
    component: LinksScreen,
    title: 'Saved',
  },
  {
    name: "Profile",
    component: LinksScreen,
    title: 'Profile',
  }
];
import LinksScreen from '../screens/LinksScreen';
import Explore from "../container/Explore";
import Search from "../container/Search";


export const routes = [
  {
    name: "Home",
    component: Explore,
    title: 'Home',
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
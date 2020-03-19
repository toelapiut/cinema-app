import LinksScreen from '../screens/LinksScreen';
import Explore from "../Container/Explore";
import HomeIcon from "../components/HomeIcon";


export const routes = [
  {
    name: "Home",
    component: Explore,
    title: 'Home',
  },
  {
    name: "Search",
    component: LinksScreen,
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
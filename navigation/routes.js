import HomeScreen from "../screens/HomeScreen";
import LinksScreen from '../screens/LinksScreen';


export const routes = [
  {
    name:"Cinema",
    component:HomeScreen,
    title:'Get Started',
    icon:"md-code-working"
  },
  {
    name:"Profile",
    component:LinksScreen,
    title:'Resources',
    icon:"md-book"
  }
];
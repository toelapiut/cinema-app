import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from '../container/SignIn'
import CreateAccount from '../container/CreateAccount'
import RecoverPassword from '../container/RecoverPassword'
import Splash from "../screens/Splash";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name={'Splash'} component={Splash}/>
      <AuthStack.Screen options={{headerShown: false}} name={'Recover password'} component={RecoverPassword}/>
      <AuthStack.Screen options={{headerShown: false}} name={'Create Account'} component={CreateAccount}/>
      <AuthStack.Screen options={{headerShown: false}} name={'SignIn'} component={SignIn}/>
    </AuthStack.Navigator>
  )
}
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from '../container/SignIn'
import CreateAccount from '../container/CreateAccount'
import RecoverPassword from '../container/RecoverPassword'
import Board from "../container/Board";

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name={'board'} component={Board}/>
      <AuthStack.Screen options={{headerShown: false}} name={'recover'} component={RecoverPassword}/>
      <AuthStack.Screen options={{headerShown: false}} name={'signup'} component={CreateAccount}/>
      <AuthStack.Screen options={{headerShown: false}} name={'login'} component={SignIn}/>
    </AuthStack.Navigator>
  )
}
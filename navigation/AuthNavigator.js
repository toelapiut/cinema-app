import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from '../container/SignIn'
import ForgotPassword from '../container/ForgotPassword'
import Board from "../container/Board";
import SignUp from '../container/SignUp';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name={'board'} component={Board}/>
      <AuthStack.Screen options={{headerShown: false}} name={'forgotPassword'} component={ForgotPassword}/>
      <AuthStack.Screen options={{headerShown: false}} name={'signup'} component={SignUp}/>
      <AuthStack.Screen options={{headerShown: false}} name={'login'} component={SignIn}/>
    </AuthStack.Navigator>
  )
}
import React, {useContext} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AuthContext} from "../../context";

export const Splash = (props) => {
  const {signIn} = useContext(AuthContext)
  console.log({signIn})
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#fff'}}>Splash</Text>
    </SafeAreaView>
  )
}
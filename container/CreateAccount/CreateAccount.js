import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from "../../context";

export const CreateAccount = () => {
  const {createAccount} = useContext(AuthContext)

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#fff'}}>CreateAccount</Text>
    </View>
  )
}
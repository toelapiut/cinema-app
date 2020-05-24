import React, {useContext, useState} from 'react';
import SignInScreen from "../../screens/SignIn";
import {AuthContext} from "../../context";

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login} = useContext(AuthContext)
  const onSubmit = () => {
    console.log({email, password})
    login(email, password)
  }

  return (
    <SignInScreen
      email={email}
      password={password}
      onHandleEmail={setEmail}
      onHandleSubmit={onSubmit}
      onHandlePassword={setPassword}
    />
  )
}
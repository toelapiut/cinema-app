import React, {useContext, useEffect, useState} from 'react';
import SignInScreen from "../../screens/SignIn";
import {AuthContext} from "../../context";
import validator from '../../validation/signin/signin';


export const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const {login} = useContext(AuthContext)

  useEffect(() => {
    setLoading(false)
  }, [])

  const onSubmit = async () => {
    let cleaned = validator({email, password})
    if (cleaned) return setError(cleaned)
    setError({})
    setLoading(true)
    await login(email, password)
    setLoading(false)
  }

  const handleForgotPassword = () => {
    navigation.navigate('forgotPassword')
  }

  return (
    <SignInScreen
      loading={loading}
      error={error}
      email={email}
      password={password}
      onHandleForgotPassword={handleForgotPassword}
      onHandleEmail={setEmail}
      onHandleSubmit={onSubmit}
      onHandlePassword={setPassword}
    />
  )
}
import React, {useContext, useEffect, useState} from 'react';
import SignInScreen from "../../screens/SignIn";
import {AuthContext} from "../../context";
import validator from '../../validation/signin/signin';


export const SignIn = () => {
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
    setLoading(true)
    await login(email, password)
    setLoading(false)
  }

  return (
    <SignInScreen
      loading={loading}
      error={error}
      email={email}
      password={password}
      onHandleEmail={setEmail}
      onHandleSubmit={onSubmit}
      onHandlePassword={setPassword}
    />
  )
}
import React, {useContext, useEffect, useState} from 'react';
import ForgotPasswordScreen from "../../screens/ForgotPassword";
import forgotPassword from "../../validation/forgotpassword/forgotPassword";
import {AuthContext} from "../../context";


export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const {sendUserPasswordResetEmail} = useContext(AuthContext)

  useEffect(() => {
    setLoading(false)
  }, [])

  const onSubmit = async () => {
    let validate = forgotPassword({email})
    if (validate) return setError(validate)
    setError({})
    setLoading(true)
    await sendUserPasswordResetEmail(email)
    setLoading(false)
  }

  return (
    <ForgotPasswordScreen
      email={email}
      error={error}
      loading={loading}
      onHandleSubmit={onSubmit}
      onHandleEmail={setEmail}
    />
  )
}
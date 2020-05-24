import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context";
import SignUpScreen from '../../screens/SignUp'

export const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const {createAccount} = useContext(AuthContext)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <SignUpScreen
      {
        ...{
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          error,
          loading
        }
      }
    />
  )
}
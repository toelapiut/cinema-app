import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context";
import SignUpScreen from '../../screens/SignUp'
import validator from '../../validation/signup/signup';
import t from 'typy';


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

  const onSubmit = async () => {
    let collectedData = {firstName, lastName, email, password, confirmPassword}
    let validated = validator(collectedData)
    if (validated) return setError(validated)
    setError({})
    setLoading(true)
    let newUser = await createAccount(collectedData)
    setLoading(false)
    if (t(newUser.message).isDefined) {
      if (/The email address is already in use by another account/.test(newUser.message)) {
        setError({email: ["email is already taken"]})
      }
    }
  }

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
      onHandleSubmit={onSubmit}
      onHandleFirstName={setFirstName}
      onHandleLastName={setLastName}
      onHandleEmail={setEmail}
      onHandlePassword={setPassword}
      onHandleConfirmPassword={setConfirmPassword}
    />
  )
}
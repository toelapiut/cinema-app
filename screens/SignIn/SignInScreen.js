import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Brand from "../../components/Brand";
import Layout from "../../constants/Layout";
import BottomButton from "../../components/BottomButton";

const {window: {width}} = Layout
const placeholderColor = '#A2A2A2'

export const SignInScreen = ({email, password, onHandleEmail, onHandleSubmit, onHandlePassword}) => {
  const passwordRef = useRef(null)

  return (
    <View style={styles.container}>
      <Brand
        width={180}
        height={90}
      />
      <TextInput
        clearButtonMode='while-editing'
        value={email}
        allowFontScaling
        multiline={false}
        autoCorrect={false}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType="email-address"
        placeholder='Email'
        placeholderTextColor={placeholderColor}
        style={styles.textInput}
        keyboardAppearance='dark'
        returnKeyType={'next'}
        onChangeText={onHandleEmail}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        value={password}
        clearButtonMode='while-editing'
        allowFontScaling
        secureTextEntry
        multiline={false}
        autoCorrect={false}
        autoCapitalize='none'
        textContentType='password'
        placeholder='Password'
        keyboardAppearance='dark'
        placeholderTextColor={placeholderColor}
        style={styles.textInput}
        onChangeText={onHandlePassword}
        returnKeyType={'done'}
      />
      <TouchableWithoutFeedback>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>
      </TouchableWithoutFeedback>
      <BottomButton
        onSubmit={onHandleSubmit}
        label='Sign In'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  textInput: {
    backgroundColor: '#303030',
    height: 48,
    fontFamily: 'cinema',
    width: width - 44,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 3,
    fontSize: 14,
    color: '#fff',
    marginTop: 15
  },
  forgotPasswordContainer: {
    color: '#303030',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  forgotPasswordText: {
    color: '#929292',
    fontFamily: 'cinema-medium',
    fontSize: 13,
  }
})
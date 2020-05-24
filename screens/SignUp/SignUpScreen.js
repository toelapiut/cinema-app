import React, {useRef} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, View} from "react-native";
import Brand from "../../components/Brand";
import Layout from "../../constants/Layout";
import BottomButton from "../../components/BottomButton";
import PropTypes from 'prop-types';
import {AntDesign} from '@expo/vector-icons';

const {window: {width}} = Layout
const placeholderColor = '#A2A2A2'
const iconSize = 24

export const SignUpScreen = (
  {
    firstName, lastName, email, password, confirmPassword, onHandleEmail, onHandleSubmit, onHandlePassword, error,
    loading, onHandleFirstName, onHandleLastName, onHandleConfirmPassword
  }) => {
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <View style={{marginBottom: 30}}>
          <Brand width={200} height={100}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            {
              error['firstName'] &&
              <AntDesign
                name="exclamationcircle"
                size={iconSize}
                style={[styles.error,
                  {
                    right: 25,
                  }
                ]}
              />
            }
            <TextInput
              editable={!loading}
              clearButtonMode='while-editing'
              value={firstName}
              allowFontScaling
              multiline={false}
              autoCorrect={false}
              autoCapitalize='none'
              autoCompleteType='email'
              textContentType='emailAddress'
              keyboardType="email-address"
              placeholder='First Name'
              placeholderTextColor={placeholderColor}
              style={[styles.textInput, styles.nameInputWidth, {marginRight: 14}]}
              keyboardAppearance='dark'
              returnKeyType={'next'}
              onChangeText={onHandleFirstName}
              onSubmitEditing={() => lastNameRef.current.focus()}
            />
          </View>
          <View>
            {error['lastName'] && <AntDesign name="exclamationcircle" size={iconSize} style={styles.error}/>}
            <TextInput
              editable={!loading}
              ref={lastNameRef}
              clearButtonMode='while-editing'
              value={lastName}
              allowFontScaling
              multiline={false}
              autoCorrect={false}
              autoCapitalize='none'
              autoCompleteType='email'
              textContentType='emailAddress'
              placeholder='Last Name'
              placeholderTextColor={placeholderColor}
              style={[styles.textInput, styles.nameInputWidth]}
              keyboardAppearance='dark'
              returnKeyType={'next'}
              onChangeText={onHandleLastName}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </View>
        </View>
        <View>
          {error['email'] && <AntDesign name="exclamationcircle" size={iconSize} style={styles.error}/>}
          <TextInput
            editable={!loading}
            ref={emailRef}
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
        </View>
        <View>
          {error['password'] && <AntDesign name="exclamationcircle" size={iconSize} style={styles.error}/>}
          <TextInput
            editable={!loading}
            ref={passwordRef}
            value={password}
            clearButtonMode='while-editing'
            allowFontScaling
            secureTextEntry
            multiline={false}
            autoCorrect={false}
            autoCapitalize='none'
            textContentType='password'
            placeholder='Your Password'
            keyboardAppearance='dark'
            placeholderTextColor={placeholderColor}
            style={styles.textInput}
            onChangeText={onHandlePassword}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            returnKeyType={'next'}
          />
        </View>
        <View>
          {error['confirmPassword'] && <AntDesign name="exclamationcircle" size={iconSize} style={styles.error}/>}
          <TextInput
            editable={!loading}
            ref={confirmPasswordRef}
            value={confirmPassword}
            clearButtonMode='while-editing'
            allowFontScaling
            secureTextEntry
            multiline={false}
            autoCorrect={false}
            autoCapitalize='none'
            textContentType='password'
            placeholder='Confirm Password'
            keyboardAppearance='dark'
            placeholderTextColor={placeholderColor}
            style={styles.textInput}
            onChangeText={onHandleConfirmPassword}
            returnKeyType={'done'}
          />
        </View>
      </KeyboardAvoidingView>
      <BottomButton
        loading={loading}
        onSubmit={onHandleSubmit}
        label='Sign In'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoid: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInputWidth: {
    width: (width - 44) / 2.1,
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
    marginTop: 13
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
  },
  error: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1000,
    color: placeholderColor
  }
})


SignUpScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  password: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  onHandleEmail: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  onHandlePassword: PropTypes.func.isRequired,
  onHandleLastName: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onHandleFirstName: PropTypes.func.isRequired,
  onHandleConfirmPassword: PropTypes.func.isRequired,
}
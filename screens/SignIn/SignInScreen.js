import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Brand from "../../components/Brand";
import Layout from "../../constants/Layout";
import BottomButton from "../../components/BottomButton";
import PropTypes from 'prop-types';
import {AntDesign} from '@expo/vector-icons';

const {window: {width}} = Layout
const placeholderColor = '#A2A2A2'
const iconSize = 24

export const SignInScreen = ({email, password, onHandleEmail, onHandleSubmit, onHandlePassword, error, loading}) => {
  const passwordRef = useRef(null)

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: (width / 2) * .7}}>
        <Brand width={200} height={100}/>
      </View>
      <View>
        {error['email'] && <AntDesign name="exclamationcircle" size={iconSize} style={styles.error}/>}
        <TextInput
          editable={!loading}
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
          placeholder='Password'
          keyboardAppearance='dark'
          placeholderTextColor={placeholderColor}
          style={styles.textInput}
          onChangeText={onHandlePassword}
          returnKeyType={'done'}
        />
      </View>
      <TouchableWithoutFeedback>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 20
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


SignInScreen.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onHandleEmail: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  onHandlePassword: PropTypes.func.isRequired
}
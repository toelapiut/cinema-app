import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Brand from "../../components/Brand";
import {AntDesign} from "@expo/vector-icons";
import BottomButton from "../../components/BottomButton";
import Layout from "../../constants/Layout";
import PropTypes from 'prop-types';

const {window: {width}} = Layout
const placeholderColor = '#A2A2A2'
const iconSize = 24

export const ForgotPasswordScreen = ({error, loading, email, onHandleEmail, onHandleSubmit}) => {
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
          placeholder='Your Email'
          placeholderTextColor={placeholderColor}
          style={styles.textInput}
          keyboardAppearance='dark'
          returnKeyType={'done'}
          onChangeText={onHandleEmail}
        />
      </View>
      <BottomButton
        loading={loading}
        onSubmit={onHandleSubmit}
        label='Recover Password'
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
  error: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1000,
    color: placeholderColor
  }
})

ForgotPasswordScreen.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  onHandleEmail: PropTypes.func.isRequired,
}


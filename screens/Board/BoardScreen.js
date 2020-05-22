import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import Brand from "../../components/Brand";
import Layout from "../../constants/Layout";
import {BlurView} from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient';
import {ButtonText} from './styled';
import {TouchableWithoutFeedback} from "react-native-web";
import PropTypes from 'prop-types';

const {window: {height, width}} = Layout;

export const BoardScreen = ({onHandleLogin, onHandleSignUp}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <StatusBar hidden/>
      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.image}
      />
      <View style={styles.brand}>
        <Brand
          width={200}
          height={150}
        />
      </View>
      <TouchableWithoutFeedback onPress={onHandleLogin}>
        <BlurView intensity={100} style={[styles.signIn, styles.buttons]}>
          <ButtonText>Login</ButtonText>
        </BlurView>
      </TouchableWithoutFeedback>
      <View style={[styles.signUp, styles.buttons, {zIndex: 99, backgroundColor: 'rgba(255, 2, 21, 0.9)'}]}>
        <TouchableWithoutFeedback onPress={onHandleSignUp}>
          <LinearGradient
            start={[0.2, -0.8]}
            end={[0.8, 0.5]}
            colors={['#FF0215', '#641010']}
            style={[styles.signIn, styles.buttons]}>
            <ButtonText>Sign Up</ButtonText>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}

BoardScreen.propTypes = {
  onHandleLogin: PropTypes.func,
  onHandleSignUp: PropTypes.func
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null
  },
  brand: {
    position: 'absolute',
    top: height / 3.2
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    width: width / 2,
    height: 70,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {
    left: 0,
  },
  signUp: {
    right: 0,
  }
})
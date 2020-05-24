import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import Layout from "../../constants/Layout";
import PropTypes from 'prop-types';


const {window: {width}} = Layout
export const BottomButton = ({label, buttonStyle, textStyle, onSubmit}) => {
  return (
    <TouchableWithoutFeedback onPress={onSubmit}>
      <View style={[styles.container, buttonStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#303030',
    bottom: 0,
    width: width,
    height: 60,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontFamily: "cinema-bold",
    fontSize: 14,
  },
})

BottomButton.propTypes = {
  label: PropTypes.string,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

BottomButton.defaultProps = {
  label: 'Sign in'
}
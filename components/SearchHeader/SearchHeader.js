import React from 'react';
import {SearchHeaderWrapper, Input, CancelText} from "./styled";
import SearchIcon from "../SearchIcon";
import {Animated, StyleSheet, Keyboard} from 'react-native';
import Layout from "../../constants/Layout";
import {TouchableWithoutFeedback} from "react-native-web";

let WIDTH = Layout.window.width - 35;

export const SearchHeader = () => {
  let width = new Animated.Value(WIDTH);
  let clearRef = React.createRef();

  const handleStartAnimation = () => {
    Animated.timing(width, {
      toValue: WIDTH - 60,
      duration: 300,
    }).start()
  };

  const handleStopAnimation = () => {
    Animated.timing(width, {
      toValue: WIDTH,
      duration: 300,
    }).start()
  };

  const handleClearance = () => {
    clearRef.current.clear();
    Keyboard.dismiss();
    return handleStopAnimation()
  };

  return (
    <SearchHeaderWrapper>
      <Animated.View style={[styles.InputWrapper, {width: width}]}>
        <SearchIcon
          focused
          height={18}
          width={20}
          fill='#7c7c7c'
          stroke='#7c7c7c'
        />
        <Input
          keyboardAppearance='dark'
          ref={clearRef}
          onFocus={handleStartAnimation}
          onBlur={handleStopAnimation}
          clearButtonMode='while-editing'
          placeholderTextColor='#7c7c7c'
          placeholder='Mavel’s The Defender'
        />

      </Animated.View>
      <TouchableWithoutFeedback onPress={handleClearance} style={{}}>
        <CancelText style={{color: '#fff'}}>Cancel</CancelText>
      </TouchableWithoutFeedback>
    </SearchHeaderWrapper>
  )
};

const styles = StyleSheet.create({
  InputWrapper: {
    marginRight: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 46,
    borderRadius: 5,
    backgroundColor: '#2b2b2b',
    borderWidth: 1,
    borderColor: '#707070',
    paddingVertical: 13,
    paddingRight: 5,
    paddingLeft: 13,
  }
})
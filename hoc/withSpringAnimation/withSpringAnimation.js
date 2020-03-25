import React from 'react';
import {Animated} from 'react-native';
import {TouchableWithoutFeedback} from "react-native-web";

export const withSpringAnimation = WrappedComponent => {
  return (props) => {
    let bouncing = new Animated.Value(1);

    const handlePressIn = () => {
      Animated.spring(bouncing, {
        toValue: .8,
        friction: 5,
        tension: 100,
        useNativeDriver: true
      }).start()
    };

    const handlePressOut = () => {
      Animated.spring(bouncing, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true
      }).start()
    };


    const bounceStyle = {
      transform: [{
        scale: bouncing
      }]
    };

    const handleOnPress = () => {
      return props.onPressHandler({...props})
    };

    return (
      <TouchableWithoutFeedback
        onPress={handleOnPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={bounceStyle}>
          <WrappedComponent{...props}/>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
};
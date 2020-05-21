import React from 'react';
import {BlurWrapper, TagText} from './styled'
import {LinearGradient} from "expo-linear-gradient";

export const Tag = ({name, active}) => {
  return (
    <BlurWrapper tint="default" intensity={100} >
      <LinearGradient
        colors={active ? ['#FF0215', '#831515']:['transparent', 'transparent']}
        start={[0.1,0.1]}
        end={[0.8,.8]}
        style={{
          paddingVertical:8,
          paddingHorizontal:20,
        }}
        locations={[0.1, 0.8]}>
      <TagText style={{color: 'white'}}>{name}</TagText>
      </LinearGradient>
    </BlurWrapper>
  )
};

Tag.defaultProps = {
  active:false
};

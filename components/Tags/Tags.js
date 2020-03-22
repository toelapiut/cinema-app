import React from 'react';
import {BlurWrapper, TagText} from './styled'

export const Tag = ({name}) => {
  return (
    <BlurWrapper tint="default" intensity={100} style={{}}>
      <TagText style={{color: 'white'}}>{name}</TagText>
    </BlurWrapper>
  )
};

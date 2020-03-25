import React from 'react';
import {SearchHeaderWrapper, Input, InputWrapper} from "./styled";
import SearchIcon from "../SearchIcon";

export const SearchHeader = () => {
  return(
    <SearchHeaderWrapper>
      <InputWrapper>
        <SearchIcon
          focused
          height={18}
          width={20}
          fill='#7c7c7c'
          stroke='#7c7c7c'
        />
        <Input
          clearButtonMode='while-editing'
          placeholderTextColor='#7c7c7c'
          placeholder='Mavel’s The Defender'
        />
      </InputWrapper>
    </SearchHeaderWrapper>
  )
};
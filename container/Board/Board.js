import React from 'react';
import BoardScreen from '../../screens/Board';
import PropTypes from 'prop-types';

export const Board = ({navigation}) => {
  const HandleLogInPage = () => {
    navigation.push('login')
  }

  const HandleSignUpPage = () => {
    navigation.push('signup')
  }

  return (
    <BoardScreen
      onHandleLogin={HandleLogInPage}
      onHandleSignUp={HandleSignUpPage}
    />
  )
}

Board.propTypes = {
  PropTypes: PropTypes.navigation
}
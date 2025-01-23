import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
} from 'react-native';

const Card = ({ style, onSwiped= () => {}, onSwipedLeft= () => {}, onSwipedRight= () => {}, onSwipedTop= () => {}, onSwipedBottom= () => {}, children }) => (
  <View style={style} >
    {children}
  </View>);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  onSwipedLeft: PropTypes.func,
  onSwipedRight:PropTypes.func,
  onSwipedTop: PropTypes.func,
  onSwipedBottom: PropTypes.func,
  onSwiped: PropTypes.func,
}
export default Card;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = props => (
  <TouchableOpacity style={styles({ ...props }).button} {...props}>
    <Text style={styles({ ...props }).text}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;

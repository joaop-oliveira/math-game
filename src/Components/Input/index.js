import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const Input = ({ placeholder, height, onChangeText }) => (
  <TextInput
    placeholder={placeholder}
    style={styles({ height }).input}
    onChangeText={onChangeText}
    underlineColorAndroid="transparent"
  />
);

export default Input;

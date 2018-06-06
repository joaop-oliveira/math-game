import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Card = props => <View style={styles({ ...props }).card}>{props.children}</View>;

export default Card;

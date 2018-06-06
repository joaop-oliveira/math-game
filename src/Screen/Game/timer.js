import React from 'react';
import { Text } from 'reac-native';
import styles from './styles';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 30
    };
  }
  render() {
    setTimeout(() => {
      this.setState({
        timer: this.state.timer - 1
      });
    }, 1000);
    return <Text style={styles.text}>{this.state.timer}</Text>;
  }
}

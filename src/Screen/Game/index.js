import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Button from '../../Components/Button';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import challengeGenerator from '../../lib/math.gen';
import styles from './styles';
// import Timer from './timer';
import * as math from 'mathjs';

class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Play'
  };
  state = {
    gameStart: false,
    expression: {
      exp: challengeGenerator(1)
    },
    score: {},
    timer: 30
  };

  onWrong = (wrong, result) => {
    const exp = challengeGenerator(1);
    const random = Math.floor(Math.random() * 100);
    if (wrong && result) {
      this.setState(state => ({
        ...state,
        expression: {
          exp,
          random
        },
        score: {
          ...state.score,
          [random]: false
        }
      }));
    } else if (!wrong && result) {
      this.setState(state => ({
        ...state,
        expression: {
          exp,
          random
        },
        score: {
          ...state.score,
          [random]: true
        }
      }));
    }
  };

  onRight = (wrong, result) => {
    const exp = challengeGenerator(1);
    const random = Math.floor(Math.random() * 100);
    if (!wrong && result) {
      this.setState(state => ({
        ...state,
        expression: {
          exp,
          random
        },
        score: {
          ...state.score,
          [random]: true
        }
      }));
    } else if (wrong && result) {
      this.setState(state => ({
        ...state,
        expression: {
          exp,
          random
        },
        score: {
          ...state.score,
          [random]: false
        }
      }));
    }
  };
  onClose = () => {
    const scoreArr = Object.values(this.state.score);
    let right = 0;
    let wrong = 0;
    const score = scoreArr.map(item => {
      if (item) {
        right = right + 1;
      } else {
        wrong = wrong + 1;
      }
    });
    alert(`Seu placar foi de ${right} Certas e ${wrong} Erradas`);
    this.setState({ gameStart: true });
  };
  render() {
    // const expression = challengeGenerator(1);
    const result = math.eval(this.state.expression.exp);
    const random = Math.floor(Math.random() * 100);
    const wrong = random < 50 ? true : false;
    if (this.state.gameStart) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Timer /> */}
          <Text style={styles.text}>{`${this.state.expression.exp} = ${wrong ? random : result}`}</Text>
          <View
            style={{
              marginBottom: 50
            }}
          />
          <Button onPress={() => this.onRight(wrong, true)} color="green">
            <Icon name="check" color="white" size={30} />
          </Button>
          <Button onPress={() => this.onWrong(wrong, true)} color="red">
            <Icon name="times" color="white" size={30} />
          </Button>
          <View
            style={{
              marginBottom: 50
            }}
          />
          <Button onPress={this.onClose} color="blue">
            Close Game!!
          </Button>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Screen</Text>
        <Button
          onPress={() => {
            this.setState({ gameStart: true });
          }}
          color="lightblue"
        >
          Start Match!
        </Button>
      </View>
    );
  }
}

export default GameScreen;

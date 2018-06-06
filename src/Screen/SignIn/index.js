import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../Components/Card';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import COLORS from '../../lib/consts';
import { signin } from '../../lib/api';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    marginTop: '20%',
    marginBottom: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class SignInScreen extends React.Component {
  state = {
    control: {}
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sign In!',
      headerStyle: {
        backgroundColor: '#2889ee'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };
  };

  _handleChange = (name, value) => {
    this.setState(state => ({
      ...state,
      control: {
        ...state.control,
        [name]: value
      }
    }));
  };

  _onLogin = () => {
    // alert(JSON.stringify(this.state.control));
    const { control } = this.state;
    fetch(`http://10.7.155.91:3000/api/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...control })
    })
      .then(async response => {
        await AsyncStorage.setItem('userToken', response.headers.map['x-auth'][0]);
        this.props.navigation.navigate('AuthLoading');
        // alert(await AsyncStorage.getItem('userToken'));
        return response.json();
      })
      .catch(error => {
        alert(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Card width="70%" height="40%">
          <Icon name="superpowers" size={50} color={COLORS.lightblue} />
          <View
            style={{
              marginBottom: 30
            }}
          />
          <Text>Login</Text>
          <Input
            placeholder="Email or Username..."
            height="15%"
            onChangeText={value => this._handleChange('userName', value)}
          />
          <Text>Passowrd</Text>
          <Input
            placeholder="Type your password..."
            height="15%"
            onChangeText={value => this._handleChange('password', value)}
          />
        </Card>
        <Button color="green" elevation={3} onPress={this._onLogin}>
          {'Login!'}
        </Button>

        <Button
          color="blue"
          elevation={3}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        >
          {'Signup!'}
        </Button>
      </View>
    );
  }
}

export default SignInScreen;

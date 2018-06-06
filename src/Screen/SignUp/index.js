import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../lib/consts';
import Card from '../../Components/Card';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    marginTop: '10%',
    marginBottom: '15%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sign Up!',
      headerStyle: {
        backgroundColor: '#2889ee'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    };
  };

  state = {
    control: {
      fullName: '',
      userName: '',
      email: '',
      password: '',
      rank_id: '1'
    }
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
    fetch(`http://10.7.155.91:3000/api/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...control })
    })
      .then(response => {
        return response.json();
      })
      .then(responseJSON => {
        // alert(JSON.stringify(responseJSON, null, 2));
        console.log(responseJSON);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Card width="70%" height="90%">
          <Icon name="superpowers" size={50} color={COLORS.lightblue} />
          <View
            style={{
              marginBottom: 20
            }}
          />
          <Text>Name</Text>
          <Input
            placeholder="Type your Name..."
            height="15%"
            onChangeText={value => this._handleChange('fullName', value)}
          />
          <Text>Username</Text>
          <Input
            placeholder="Type your Username..."
            height="15%"
            onChangeText={value => this._handleChange('userName', value)}
          />
          <Text>Email</Text>
          <Input
            placeholder="Type your Email..."
            height="15%"
            onChangeText={value => this._handleChange('email', value)}
          />
          <Text>Passowrd</Text>
          <Input
            placeholder="Type your Password..."
            height="15%"
            onChangeText={value => this._handleChange('password', value)}
          />
        </Card>
        <Button color="green" elevation={3} onPress={this._onLogin}>
          SignUp!
        </Button>
        <Button
          color="blue"
          elevation={3}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        >
          Cancel!
        </Button>
      </View>
    );
  }
}

export default SignUpScreen;

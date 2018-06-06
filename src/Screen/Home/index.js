import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Button from '../../Components/Button';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import GameScreen from '../Game';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => {
            // alert(JSON.stringify(this.props.navigation, null, 2));
            this.props.navigation.navigate('Details', { name: 'Joao Paulo' });
          }}
          color="blue"
        >
          Go To Details !!
        </Button>
        <Button
          onPress={async () => {
            await AsyncStorage.removeItem(`userToken`);
            // alert(JSON.stringify(this.props.navigation, null, 2));
            // this.props.navigation.navigate('Details', { name: 'Joao Paulo' });
          }}
          color="blue"
        >
          Logout !!
        </Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };
  render() {
    const name = this.props.navigation.getParam('name', 'fallback name');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button color="green" onPress={() => this.props.navigation.navigate('Home')}>
          Go To Home !!
        </Button>
        <Button color="green" onPress={() => alert(name)}>
          Show Params <Icon size={30} color="white" name="ios-trash" />
        </Button>
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator(
  {
    Game: GameScreen,
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Details') {
          iconName = 'info';
        } else if (routeName === 'Game') {
          iconName = 'superpowers';
        }
        return <Icon name={iconName} size={25} color="#2889ee" />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#2889ee',
      inactiveTintColor: 'gray'
    }
  }
);

export default RootStack;

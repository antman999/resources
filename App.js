import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../resources/app/HomeScreen";
import Map from './Map'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    notification: 'rgb(255, 69, 58)',
  },
};

class App extends Component{
  render(){
    return (
      <>
        <HomeScreen/>
      </>
    );
  }
};
export default App;

 /*
     <NavigationContainer theme={MyTheme}>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons
                    name="google-maps"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
 */
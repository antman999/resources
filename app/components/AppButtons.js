import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import AppText from './AppText'

const AppButtons = (props) => {
  return (
    <TouchableOpacity style={props.title === "Sign Up" ? styles.signup : styles.welcomeScreen} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  welcomeScreen: { 
    height: 60,
    backgroundColor: '#03dac5',
    borderRadius: 40,
    margin: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
 signup: {
    height: 60,
    backgroundColor: '#303f9f',
    borderRadius: 40,
    margin: 15,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold',
  },
});


export default AppButtons


import React, { Component } from 'react'
import {
  Alert,
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const HomeScreen = () => (
  <ImageBackground style={styles.image} source={require('./assets/nycdark.jpg')}>
    <Image style={styles.logo }source = {require('./assets/logo.png')}  /> 
    <View style={styles.login}></View>
    <View style={styles.signup}></View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
  login: {
    width: '100%',
    height: 60,
    backgroundColor: '#03dac5',
  },

  signup: {
    width: '100%',
    height: 70,
    backgroundColor: '#3700B3',
  },
  logo: {
    width: 320,
    height: 220,
    position: 'absolute',
    top: 200
  }
});

  

export default HomeScreen

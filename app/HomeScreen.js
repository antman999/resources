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
import Card from './Card';
import AppButtons from './components/AppButtons';

const HomeScreen = () => (
  <ImageBackground
    blurRadius={7}
    style={styles.image}
    source={require('./assets/nycdark.jpg')}>
    <Image style={styles.logo} source={require('./assets/logo.png')} />
    <View style={styles.welcomeContainer}>
      <AppButtons title="Log in" onPress={() => <Card/>} />
      <AppButtons title="Sign Up" onPress={() => console.log('nice')} />
    </View>
  </ImageBackground>
);

  

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 320,
    height: 220,
    position: 'absolute',
    top: 200,
  },
  welcomeContainer: {
    padding: 20,
    width: "100%"
  }

});


export default HomeScreen

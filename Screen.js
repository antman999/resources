import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'

export default class Screen extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"white"}}>
        <StatusBar barStyle='light-content'/> 
      </View>
    )
  }
}

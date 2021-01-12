import React, { Component } from 'react'
import { Alert, Button, Text, View } from 'react-native'

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>What do you need assistance with?</Text>
      <Button
        title="Housing"
        onPress={() => Alert.alert("First we need to review some questions", "Are you signed in ?", [
          {
            text: "Yes"
          },
          {
            text: "No"
          }
        ])}
      
      />
    </View>
  );
}

export default HomeScreen

import React, { Component } from 'react'
import { Alert, Button, Text, View, SafeAreaView} from 'react-native'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: .4, justifyContent: 'center', alignItems: 'center' }}>
        <Text>What do you need assistance with?</Text>
      </View>
      <View style={{flex:1, justifyContent:"space-around", alignItems:"center"}}>
        <Button
          title="Housing"
          onPress={() =>
            Alert.alert(
              'First we need to review some questions',
              'Are you signed in ?',
              [
                {
                  text: 'Yes',
                },
                {
                  text: 'No',
                },
              ],
            )
          }
        />
      </View>
    </View>
  );
}

export default HomeScreen

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import mapStyle from './mapStyle';

export default class Map extends Component {
  render() {
    return (
    <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google
        customMapStyle={mapStyle}
        style={{
          flex: 1
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}></MapView>
    )
  }
}

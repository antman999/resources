import React from 'react'
import {View,StyleSheet, Text, Image} from "react-native"


const Card = ({title,subTitle,image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.subheader} >{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2B303D',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  header: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 6,
  },
  subheader: {
    color: '#7F8A94',
    fontSize: 15,
  },
});

export default Card

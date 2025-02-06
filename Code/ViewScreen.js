// screens/ViewScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ViewScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`Name: ${item.name}`}</Text>
        <Text style={styles.text}>{`Phone: ${item.phone}`}</Text>
        <Text style={styles.text}>{`Description: ${item.description}`}</Text>
        <Text style={styles.text}>{`Make: ${item.make}`}</Text>
        <Text style={styles.text}>{`Model: ${item.model}`}</Text>
        <Text style={styles.text}>{`Variant: ${item.variant}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ViewScreen;

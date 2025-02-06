// Import necessary React and React Native components
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define your AboutScreen component
const More = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clothing App</Text>
      <Text style={styles.description}>
        Welcome to the Clothing App! This app helps you discover and purchase the latest fashion trends.
      </Text>
      
      <Text style={styles.heading}>Developers</Text>
      {/* Developer Images */}
      <View style={styles.developerContainer}>
        {/* Developer 1 */}
        <Image source={require('./assets/profile.jpg')} style={styles.developerImage} />
        {/* Developer 2 */}
        <Image source={require('./assets/profile.jpg')} style={styles.developerImage} />
        {/* Developer 3 */}
        <Image source={require('./assets/profile.jpg')} style={styles.developerImage} />
        {/* Developer 4 */}
        <Image source={require('./assets/profile.jpg')} style={styles.developerImage} />
        
      </View>
      
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    marginBottom: 32,
  },
  developerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  developerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});


export default More;



import { StyleSheet, Text, View, TouchableOpacity, TextInput,Image } from 'react-native';
import React, { useState } from 'react';
import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from './Config';

import 'firebase/auth';

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      // Basic validation
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      // You can add more advanced email validation if needed
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      await firebase.auth().signInWithEmailAndPassword(email, password);

      // If login is successful, navigate to the Dashboard
      navigation.navigate('Dashboard');
    } catch (error) {
      alert(error.message);
    }
  }; 

  return (

    <View style={styles.container}>
      
      <MaterialCommunityIcons name="pinwheel" size={50}/>
      <Text style={styles.title}>Signin</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      />
      <TouchableOpacity onPress={() => loginUser(email, password)}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text>Dont Have Account | Register</Text>
      </TouchableOpacity>
     
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0e9aa7',
    
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'yellow',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'red',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  nameImg: {
       
    width: '30%',
    height: 120,
    position: 'absolute',
    left: '35%',
    top: '13%',
    
},
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 3,
    marginBottom: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4285F4', // Google's blue color
    padding: 10,
    borderRadius: 5,
  },
});

export default Login;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import messaging from '@react-native-firebase/messaging';
import registerNNPushToken from 'native-notify';
import firebase from './Config';
import HomeScreen from './HomeScreen';
import Test from './Test';

import CartScreen from './CartScreen';
import Signup2 from './Signup2';
import Login from './Login';
import Store from './Store';
import React,{useEffect} from 'react';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  // registerNNPushToken(18409, 'dVC8hdjvdhPxDxHwlQZ6mo');
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  const gettoken=async()=>{
    const token=await messaging().getToken()
  
   console.log(token);
    
    
  }
  useEffect(()=>{
    requestUserPermission()
    gettoken()
  },[])

  return (
 <Provider store={Store}>
  <HomeScreen/>
 </Provider>
    
   
  // //  <Signup2/>
    
  
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

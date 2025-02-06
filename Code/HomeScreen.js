import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons,FontAwesome} from 'react-native-vector-icons';



import More from './More';
import OptionScreen from './ContentScreen';
import ContentScreen from './ContentScreen';
import Profile from './Profile';
import CartScreen from './CartScreen';

const Bottom=createBottomTabNavigator();
function HomeScreen(){
    return(
        <NavigationContainer>
    <Bottom.Navigator
    >
    <Bottom.Screen name=' ' component={ContentScreen}
   options={{
   
    tabBarIcon:({black,color})=>(
        <MaterialCommunityIcons name="home" size={26} color={black}/>
    ),
    title: '',
    headerStyle:{
backgroundColor:'#FFA500',
height:100
    },
    
//    headerTitle:()=>(
//     <Image
//     source={require('./assets/pakwheel.png')}
//     style={{width:180,height:60}}
//     />
//    )
    
  
    }}/>
    
<Bottom.Screen name='..' component={Profile}
options={{
    title:'',
    backgroundColor:'red',
    tabBarIcon:({black,color})=>(
        <MaterialCommunityIcons name="account-circle" size={26} color={black}/>
    )
}}
/>
<Bottom.Screen name='...' component={More}
options={{
    title:'',
    tabBarIcon:({black,color})=>(
        <MaterialCommunityIcons name="account-wrench" size={26} color={black}/>
        
    )
}}
/>
<Bottom.Screen name='Cart' component={CartScreen}
options={{
    title:'',
    tabBarIcon:({black,color})=>(
        <MaterialCommunityIcons name="cart" size={26} color={black}/>
        
    )
}}

/>
    </Bottom.Navigator>
    </NavigationContainer>
    );
}
function Home(){
return(
    <View>

    <ContentScreen/>
    </View>
)
}
export default HomeScreen;
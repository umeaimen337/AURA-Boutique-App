

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState} from "react";
import firebase from "./Config";
import { auth,firestore } from "./Config";

import Login from "./Login";
import Dashboard from "./Dashbord";
import Signup2 from "./Signup2";

const Stack = createNativeStackNavigator();


 function Profile(){
    return(
       <Stack.Navigator>
           <Stack.Screen name="LoginScreen" component={Home}/>
          <Stack.Screen name="Registration" component={Signup2}/>
       
        <Stack.Screen name="Dashboard" component={Dashboard}/>
       </Stack.Navigator>
    )
}
function Home(){
    return(
        <Login/>
    )
}
export default Profile;
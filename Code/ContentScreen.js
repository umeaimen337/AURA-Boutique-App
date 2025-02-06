import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-web';
import MainScreeen from './MainScreen';
import Brand from './Brand';
import Bike from './Bike';
import News from './News';

const Tab = createMaterialTopTabNavigator();

 function ContentScreen(){
    return(
     
        
            <Tab.Navigator>
                <Tab.Screen name='Catogry' component={MainScreeen}/>
                <Tab.Screen name='Brand' component={Brand}/>
                <Tab.Screen name='Warm' component={Bike}/>
                <Tab.Screen name='News' component={News}/>
                
              
            </Tab.Navigator>
       
            
    )
}
function Catagory(){
    return(
        <Text> </Text>
    )
}
export default ContentScreen;
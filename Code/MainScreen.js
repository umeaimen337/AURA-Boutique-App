import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView,FlatList,Linking} from 'react-native';

import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ViewScreen from './ViewScreen';


import Profile from './Profile';
import Login from './Login';
import Products from './Products';
;

const Stack = createNativeStackNavigator();
function MainScreeen(){
    return(
        <Stack.Navigator>
          <Stack.Screen name=' ' component={Content}/>
          
          <Stack.Screen name='Products' component={Products}/>
          <Stack.Screen name='View' component={ViewScreen}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Login' component={Login}/>
       
        </Stack.Navigator>
    )
}

function Content({navigation }){
    return(
        <View>
          <ScrollView>
        <ScrollView horizontal={true} >
 

        </ScrollView>
        <ScrollView horizontal={true} >
            


        </ScrollView>
        <Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>services</Text>
        <List/>
        <Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>Clothing </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('certified cars')}>
          <Text style={{paddingLeft:310,paddingBottom:0,color:'blue'}}>see all</Text>
        </TouchableOpacity>
        <PakwheelCertified/>
        <Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>ALL PRODUCTS</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Products')}>
          <Text style={{paddingLeft:310,paddingBottom:0,color:'blue'}}>see all</Text>
        </TouchableOpacity>
        <Productview/>
        <Card/>
       </ScrollView>
    </View>
    )
}
const product = [
  {
    id: 1, title: 'APP', Desc: 'ONLINE SHOPP',Image: require('./assets/online.jpg'),
  },
  {
    id: 1, title: 'APP', Desc: 'Home Delivery', Image: require('./assets/home.png'),
  },
  {
    id: 1, title: 'APP', Desc: 'Ready to Wear', Image: require('./assets/ready.jpg'),
  },
  {
    id: 1, title: 'APP', Desc: 'wedding clothes', Image: require('./assets/w.jpg'),
  },
  {
    id: 1, title: 'APP', Desc: 'jackets', Image: require('./assets/ja.jpg'),
  },
  {
    id: 1, title: 'APP', Desc: 'sweater', Image: require('./assets/sw.jpg'),
  },
  
]
function List(){
  const renderItem = ({ item }) => (
    <View style={styles.itembox2}>
      <Image source={item.Image} style={styles.img2} />
      <Text style={styles.titletext2}>{item.title}</Text>
      <Text style={styles.desctext}>{item.Desc}</Text>
     
     
    </View>
  )
  return (

    <View style={styles.container}>

      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
function PakwheelCertified(){
 return(
  <View>
    <ScrollView horizontal={true}>
      <View style={styles.itembox2}>
        <Image source={require('./assets/d1.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> Rang Je</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 6000</Text>
       
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d2.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> Rang Je</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 2500</Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d3.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> maria.B</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 4500</Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d4.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> Laimlight</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 3500</Text>
      
      </View>
    </ScrollView>
    
  </View>
 )
}
function Productview(){
  return(
    <View>
      <ScrollView horizontal={true}>
      <View style={styles.itembox2}>
        <Image source={require('./assets/d5.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> Designer</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr  1000 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d6.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> OuttFitters</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 2500</Text>
       
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d7.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10,fontWeight:600}}> Zipper</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 4500</Text>
      
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d8.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> jacket</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 7500 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d9.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}> Zip Jacket</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 13500 </Text>
        
      </View>
      <View style={styles.itembox2}>
      <Image source={require('./assets/d10.jpg')} style={{height:160,width:175}}/>
        <Text style={{paddingTop:10}}>Leather Jacket</Text>
        <Text style={{paddingTop:10,fontWeight:'bold'}}>Pkr 9500 </Text>
        
      </View>
      </ScrollView>
    </View>
  )
}
function Card(){
  return(
<View style={styles.itembox3}>
  <AntDesign name='link' size={40} />
  <Text style={{fontSize:15,fontWeight:'bold',paddingTop:20}}>More </Text>
    <Text onPress={()=>Linking.openURL('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjMleqf0eaDAxWE6hYFHT9RC-QYABAAGgJ0bA&ase=2&gclid=Cj0KCQiAtaOtBhCwARIsAN_x-3JCUVGIp68xATJJ-urM0VSWLyIKQzLCziH2ZSx-J7XkROMa81DLpWEaAgWIEALw_wcB&ohost=www.google.com&cid=CAESVuD2E1MBBBj_mUtmQMVz8_iObt2AeslfNzTJjlx76kO4jWlULxSmjdwXp1_hHIhxMnb66T18G59t_zhHf65luYj0c3gkWIZKoCx3-aatbImAuhL1g4AG&sig=AOD64_2fzRm_f4q_m9qvhpn-4FPnOIYXQA&q&nis=4&adurl&ved=2ahUKEwjb3eOf0eaDAxUDdPUHHSA4DbgQ0Qx6BAgFEAE')} style={{paddingTop:20,color:'green'}}>
      <Ionicons name='reorder-four' size={30}/>
      Alkaram stduio

    </Text>
    <Text onPress={()=>Linking.openURL('https://en.wikipedia.org/wiki/Clothing')} style={{paddingTop:20,color:'green'}}>
      <MaterialCommunityIcons name='wikipedia' size={30}/>
     Clothing wikipedia

    </Text>
    <Text onPress={()=>Linking.openURL('https://www.youtube.com/@CherryFashionandCreation')} style={{paddingTop:20,color:'green'}}>
      <AntDesign name='youtube' size={30}/>
      Fashion Creations

    </Text>
  
      
   
    
     </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itembox: {
        // flex: 1,
        width: 80,
        height: 100,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 4,
        shadowColor: '#000', 
        shadowOffset: {
        width: 0,
        height: 5, 
      },
      shadowOpacity: 1, 
      shadowRadius: 3.98, 
      elevation: 10,
      },
      img: {
        // flex: 1,
        width: 196,
        height: 160,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderColor: 'black',
        // borderWidth: 1, 
        resizeMode: 'contain',
        // marginLeft: 7,
        // marginTop: 6,
      },
      titletext: {
        fontSize: 12,
        // fontWeight: 'bold',
        marginLeft: 10,
        paddingTop:15
       
      },
      itembox2: {
        // flex: 1,
        width: 180,
        height: 250,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
         marginTop: 10,
        marginLeft: 4,
        shadowColor: '#000', 
        shadowOffset: {
        width: 0,
        height: 5, 
      },
      shadowOpacity: 1, 
      shadowRadius: 3.98, 
      elevation: 10,
      },
      titletext2: {
        fontSize: 10,
        
        marginLeft: 10,
        color: 'blue',
      },
      desctext: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      img2: {
        // flex: 1,
        width: 150,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // borderColor: 'black',
        // borderWidth: 1, 
        resizeMode: 'contain',
        // marginLeft: 7,
        // marginTop: 6,
      },
      itembox3: {
        // flex: 1,
        width: 340,
        height: 300,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
         marginTop: 50,
        marginLeft: 20,
        shadowColor: '#000', 
        shadowOffset: {
        width: 0,
        height: 3,
       
      },
      shadowOpacity: 1, 
      shadowRadius: 3.98, 
      elevation: 10,
      }
  });
export default MainScreeen;
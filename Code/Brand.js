import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet,ScrollView ,Linking} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MaterialCommunityIcons,Ionicons,FontAwesome,AntDesign,Octicons} from 'react-native-vector-icons';
import ViewScreen from './ViewScreen';
const Move = createNativeStackNavigator();
 function Brand(){
    return(
    <View>
        <ScrollView>
          <Text style={{paddingTop:15,fontWeight:'bold',fontSize:20,backgroundColor:'#E2DFD2',height:60}}>BRANDS</Text>
<BrandNames/>
<Text style={{ fontSize: 20, paddingTop:15,fontWeight:'bold'}}>Scrolling To The New Clothes</Text>
<Listnewcars/>
</ScrollView>
</View>
    )
}
function BrandNames(){
return(

        <View >
          <ScrollView horizontal={true}>
            <Text>    </Text>
            <Text>    </Text>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.junaidjamshed.com/')}>
       <View style={styles.itembox}>
        <Text></Text>
<Image source={require('./assets/jj.jpg')} style={styles.img}/>

       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.sanasafinaz.com/')}>
       <View style={styles.itembox}>
        <Text></Text>
       <Image source={require('./assets/sn.png')} style={{ height:60, width:70, paddingTop:70,  marginLeft: 3}}/>
       </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>Linking.openURL('https://khaadi.com/')}>
       <View style={styles.itembox}>
       
       <Image source={require('./assets/kh.png')} style={{ height:60, width:70, paddingTop:90,  marginLeft: 3}}/>

       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.mariab.pk/')}>
       <View style={styles.itembox}>
   <Text></Text>
       <Image source={require('./assets/m.png')} style={{ height:60, width:70, paddingTop:60,  marginLeft: 3}}/>

       </View>
      </TouchableOpacity>
       </ScrollView>
       <ScrollView horizontal={true}>
            <Text>    </Text>
            <Text>    </Text>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.gulahmedshop.com/')}>
       <View style={styles.itembox}>
      
       <Image source={require('./assets/g.png')} style={{ height:70, width:70, paddingTop:95,  marginLeft: 3}}/>
       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://nishatlinen.com/')}>
       <View style={styles.itembox}>
       <Text></Text>
       <Image source={require('./assets/n.png')} style={{ height:60, width:70, paddingTop:70,  marginLeft: 3}}/>
       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://pk.sapphireonline.pk/')}>
       <View style={styles.itembox}>
       <Text></Text>
       <Image source={require('./assets/sp.png')} style={{ height:60, width:70, paddingTop:70,  marginLeft: 3}}/>
       </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://www.limelight.pk/')}>
       <View style={styles.itembox}>
       <Text></Text>
       <Image source={require('./assets/lm.png')} style={{ height:60, width:70, paddingTop:70,  marginLeft: 3}}/>
       </View>
      </TouchableOpacity>
       </ScrollView>
    </View>
)
}

    const products = [
        { id: 1, name: 'Junaid jamshed', description: 'j.collection',  model: '2000',  image: require('./assets/han.jpg') },
        { id: 2, name: 'SananSafinaz',  description: 'silk collection',  model: '5000',  image: require('./assets/ss.jpg') },
        { id: 3, name: 'Khaadi',  description: 'Silk Khaadi',  model: '7000',  image: require('./assets/kha.jpg') },
        { id: 4, name: 'MARIA.B',  description: 'Wedding Collection',  model: '10000',  image: require('./assets/mb.jpg') },
        { id: 5, name: 'Gul_AHmad',  description: 'Gul_Collection',  model: '4000',  image: require('./assets/ga.jpg') },
        { id: 6, name: 'Nishatline',  description: 'N_Collection',  model: '2000',  image: require('./assets/ni.jpg') },
        { id: 7, name: 'SAPPHIRE',  description: 'volume 5',  model: '3007',  image: require('./assets/sph.jpg') },
        { id: 8, name: 'LimeLight',  description: 'Volume 6',  model: '4000',  image: require('./assets/lmi.jpg') },
        { id: 9, name: 'Khaddi',  description: 'Volume 1',  model: '2003',  image: require('./assets/xyz.jpg') },
        
        
      ];
      
      const Listnewcars = ({ navigation }) => {
          
      
        const renderItem = ({ item }) => (
         
            <View style={styles.itembox2}>
              <Image source={item.image} style={styles.img2} />
              <View  style={styles.Text}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text></Text>
              <Text style={styles.itemName}>{item.description}</Text>
              <Text></Text>
              <Text style={styles.itemName}>{item.model}</Text>
              
              
              </View>
              
              
            </View>
        
        );
      
        return (
          <View style={styles.container}>
            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
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
      titletext: {
        fontSize: 12,
        // fontWeight: 'bold',
        marginLeft: 10,
        paddingTop:15
       
      },
      img:{
        height:40,
        width:70,
        paddingTop:60,
         marginLeft: 3,
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      itemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
      },
      itemName: {
      //  color:'#5f9ea0',
      fontWeight:'bold',
        flexWrap: 'wrap',
        
    
    
        
      },
      itembox2: {
        // flex: 1,
        width: 400,
        height: 170,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
         marginTop: 10,
        marginLeft: 4,
        flexDirection: 'row',
      //  backgroundColor:'#fffaf0',
        marginBottom: 16,
        shadowColor: 'grey', 
        shadowOffset: {
        width: 0,
        height: 5, 
      },
      shadowOpacity: 1, 
      shadowRadius: 3.98, 
      elevation: 10,
      },
      img2: {
        // flex: 1,
        width: 150,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        // borderColor: 'red',
        borderWidth: 1, 
        resizeMode: 'contain',
        // marginLeft: 7,
        // marginTop: 6,
      },
      Text:{
        flex:1,
     alignItems:'center',
    paddingTop:10,
    
      }
})

export default Brand;
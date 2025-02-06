// CartScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList,StyleSheet,Image } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from './Action';

const CartScreen = ({ cart, removeFromCart }) => {
  
  return (
    <View style={{flex:1}}>
       <View style={{width:"100%",height:60,flexDirection:'row',alignItems:'center',
    backgroundColor:'#fff',elevation:1,
  }}>
      <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>Your Cart</Text>
    

    </View> 
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{width:'94%',alignSelf:'center',flexDirection:'row',paddingLeft:10,height:120,backgroundColor:'#fff',marginTop:10,borderRadius:10,elevation:1,alignItems:'center'}}>
              <Image source={item.image} style={{width:100,height:100,borderRadius:10}}/>
              <View>
            <Text style={{fontWeight:'600',paddingLeft:30}}>{item.name}</Text>
            
            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:30,marginTop:5}}>
            <TouchableOpacity style={{paddingLeft:10,paddingRight:10,backgroundColor:'red',borderRadius:10,height:30,justifyContent:'center',alignItems:'center'}}
             onPress={() => removeFromCart(item.id)}>
            <Text style={{fontWeight:600}}> Remove from Cart</Text>
            </TouchableOpacity>
            </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart })(CartScreen);

// ProductScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, FlatList ,StyleSheet,Image,Alert} from 'react-native';
import { connect } from 'react-redux';
import { toggleFavorite, addToCart } from './Action';

const Products = ({ products, addToCart }) => {
    const handleAddToCart = (item) => {
        addToCart(item);
        Alert.alert('Success', 'Item added to cart successfully!');
        
      };
  return (
    
    <View  style={{flex:1}}>
        <View style={{width:"100%",height:60,flexDirection:'row',alignItems:'center',
    backgroundColor:'#fff',elevation:1,
  }}>
      <Text style={{color:'#000',fontSize:16,fontWeight:'700'}}>PakWheel Products</Text>
    

    </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{width:'94%',alignSelf:'center',flexDirection:'row',paddingLeft:10,height:120,backgroundColor:'#fff',marginTop:10,borderRadius:10,elevation:1,alignItems:'center'}}>
                 <Image source={item.image} style={{width:100,height:100,borderRadius:10}}/>
                 <View >
                 <Text style={{fontSize:18,fontWeight:'600',color:'#000',paddingLeft:30}}>{item.name}</Text>
  <Text style={{fontWeight:'600',paddingLeft:30}}>{item.make}</Text>
  <Text style={{color:'green',paddingLeft:30}}>{item.model}</Text>
  <View style={{flexDirection:'row',alignItems:'center',paddingLeft:30,marginTop:5}}>

          
            <TouchableOpacity style={{paddingLeft:10,paddingRight:10,backgroundColor:'green',borderRadius:10,height:30,justifyContent:'center',alignItems:'center'}}
            onPress={() => handleAddToCart(item)}>
              <Text style={{color:'#fff'}}>Add to Cart</Text>
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
  products: state.products,
});

export default connect(mapStateToProps, { toggleFavorite, addToCart })(Products);

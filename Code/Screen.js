import React from 'react';
import { View, FlatList } from 'react-native';
import Product from './Product';
import Cart from './Cart';

const products = [
  { image: require('./images/a6.jpg'), price: '$10' },
  { image: require('./images/a6.jpg'), price: '$20' },
  { image: require('./images/a6.jpg'), price: '$30' },
];

const Screen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <Product image={item.image} price={item.price} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Cart />
    </View>
  );
};

export default Screen;

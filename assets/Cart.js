import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

const CartScreen = ({ cartItems }) => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartScreen);

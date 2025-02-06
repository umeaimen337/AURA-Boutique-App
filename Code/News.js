import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, Linking } from 'react-native';

const  News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6df0d66b0ffd412d8ed21b16b38c9c15')
      .then((response) => response.json())
      .then((json) => setNews(json.articles))
     
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.source} onPress={() => Linking.openURL(item.url)}>{item.source.name}</Text>
    </View>
  );

  return (
   
    <View style={styles.container}>
 <SafeAreaView>
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
       </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  source: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default News;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import { Loading } from '../components/Loading';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true)
    axios.get('https://6554872c63cafc694fe69816.mockapi.io/news-app/Posts')
    .then(({ data }) => {
      setItems(data)
    }).catch(err => {
      console.log(err);
      Alert.alert('Error', 'Error when receiving articles');
    }).finally(() => {
      setIsLoading(false)
    });
  }

  useEffect(fetchPosts, []);

  if(isLoading) {
    return (
      <Loading />
    )
  }
  
  return (
    <View>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
          <Post
            title={item.title} 
            imageUrl={item.imageUrl} 
            createdAt={item.createdAt} 
          />
        </TouchableOpacity>}
      />
    </View>
  );
}

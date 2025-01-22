import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MemeGallery = () => {
  const [memes, setMemes] = useState([]);
  const [activeCategory, setActiveCategory] = useState('trending');

  useEffect(() => {
    // TODO: Implement API call
    const sampleMemes = [
      { id: 1, uri: 'https://placehold.co/600x400/8e2de2/ffffff?text=Meme+1', likes: 142, category: 'trending' },
      { id: 2, uri: 'https://placehold.co/600x400/4a00e0/ffffff?text=Meme+2', likes: 89, category: 'funny' },
      { id: 3, uri: 'https://placehold.co/600x400/00bfa5/ffffff?text=Meme+3', likes: 204, category: 'educational' },
    ];
    setMemes(sampleMemes);
  }, []);

  const categories = [
    { id: 'trending', label: '🔥 Trending' },
    { id: 'funny', label: '😂 Divertidos' },
    { id: 'educational', label: '📚 Educativos' },
  ];

  return (
    <View className="p-4">
      <Text className="text-white text-2xl font-bold mb-4">Galería de Memes</Text>
      
      <View className="flex-row justify-between mb-4">
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            className={`px-4 py-2 rounded-2xl ${activeCategory === cat.id ? 'bg-purple-600' : 'bg-purple-800/50'}`}
            onPress={() => setActiveCategory(cat.id)}
          >
            <Text className="text-white">{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={memes}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View className="mb-4 w-[48%]">
            <Image
              source={{ uri: item.uri }}
              className="w-full h-48 rounded-2xl mb-2"
            />
            <View className="flex-row items-center justify-between">
              <TouchableOpacity className="flex-row items-center">
                <Icon name="heart" size={20} color="#FF4081" />
                <Text className="text-white ml-2">{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-purple-600 p-2 rounded-xl">
                <Icon name="share" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MemeGallery;
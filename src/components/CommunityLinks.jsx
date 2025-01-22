import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const socials = [
  { icon: 'twitter', name: 'Twitter', color: '#1DA1F2', url: 'https://twitter.com' },
  { icon: 'telegram', name: 'Telegram', color: '#0088CC', url: 'https://telegram.org' },
  { icon: 'discord', name: 'Discord', color: '#7289DA', url: 'https://discord.com' },
];

const CommunityLinks = () => {
  return (
    <View className="p-4">
      <Text className="text-white text-2xl font-bold mb-6">Únete a la Comunidad</Text>
      
      <View className="flex-row justify-around">
        {socials.map((social, index) => (
          <TouchableOpacity
            key={index}
            className="items-center"
            onPress={() => Linking.openURL(social.url)}
          >
            <View 
              className="w-16 h-16 rounded-2xl items-center justify-center mb-2"
              style={{ backgroundColor: social.color }}
            >
              <Icon name={social.icon} size={32} color="white" />
            </View>
            <Text className="text-white">{social.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CommunityLinks;
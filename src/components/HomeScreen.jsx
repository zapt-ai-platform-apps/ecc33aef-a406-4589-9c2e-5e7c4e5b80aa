import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView className="bg-black flex-1">
      <LinearGradient
        colors={['#4A00E0', '#8E2DE2']}
        className="p-6 rounded-b-3xl shadow-lg"
      >
        <View className="items-center mb-8">
          <Image
            source={{ uri: 'https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=512&height=512' }}
            className="w-32 h-32 mb-4"
          />
          <Text className="text-4xl font-bold text-yellow-400 mb-2">$RoyalM</Text>
          <Text className="text-white text-lg">El Royal Master de los Memecoins</Text>
        </View>

        <TouchableOpacity 
          className="bg-yellow-400 p-4 rounded-2xl flex-row items-center justify-center"
          onPress={() => Linking.openURL('https://quickswap.exchange')}
        >
          <Icon name="wallet" size={24} color="black" />
          <Text className="text-black font-bold ml-2 text-lg">Comprar Ahora</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View className="p-4">
        <View className="bg-purple-900/50 p-4 rounded-2xl mb-4">
          <Text className="text-white text-xl font-bold mb-2">Precio Actual</Text>
          <Text className="text-yellow-400 text-3xl font-bold">$0.00001234</Text>
          <Text className="text-gray-400">+5.67% (24h)</Text>
        </View>

        <View className="flex-row justify-between mb-4">
          <StatBox title="Holders" value="10.2K" />
          <StatBox title="Liquidez" value="$512K" />
          <StatBox title="MCap" value="$1.2M" />
        </View>
      </View>
    </ScrollView>
  );
};

const StatBox = ({ title, value }) => (
  <View className="bg-purple-900/30 p-3 rounded-xl flex-1 mx-1">
    <Text className="text-gray-400 text-center">{title}</Text>
    <Text className="text-yellow-400 text-center font-bold text-lg">{value}</Text>
  </View>
);

export default HomeScreen;
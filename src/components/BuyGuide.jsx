import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const steps = [
  { icon: 'get-app', title: 'Descarga MetaMask', description: 'Crea una billetera crypto segura' },
  { icon: 'link', title: 'Conecta a Polygon', description: 'Selecciona la red Polygon' },
  { icon: 'swap-horiz', title: 'Compra $RoyalM', description: 'En QuickSwap usando USDT' },
];

const BuyGuide = () => {
  return (
    <View className="p-4">
      <Text className="text-white text-2xl font-bold mb-6">Cómo Comprar</Text>
      
      {steps.map((step, index) => (
        <View key={index} className="flex-row items-center mb-6">
          <View className="bg-purple-600 w-12 h-12 rounded-full items-center justify-center mr-4">
            <Icon name={step.icon} size={24} color="white" />
          </View>
          <View className="flex-1">
            <Text className="text-white text-lg font-semibold">{step.title}</Text>
            <Text className="text-gray-400">{step.description}</Text>
          </View>
          {index < steps.length - 1 && (
            <Icon name="arrow-forward" size={24} color="#6B46C1" className="mx-2" />
          )}
        </View>
      ))}

      <TouchableOpacity 
        className="bg-yellow-400 p-4 rounded-2xl items-center"
        onPress={() => Linking.openURL('https://quickswap.exchange')}
      >
        <Text className="text-black font-bold text-lg">Iniciar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyGuide;
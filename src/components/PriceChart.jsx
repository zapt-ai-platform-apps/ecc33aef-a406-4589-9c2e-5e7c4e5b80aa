import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-wagmi-charts';

const PriceChart = () => {
  // TODO: Implement real data from CoinGecko API
  const sampleData = [
    { timestamp: 1625945400000, value: 0.00001234 },
    { timestamp: 1625946000000, value: 0.00001345 },
    { timestamp: 1625946600000, value: 0.00001456 },
    { timestamp: 1625947200000, value: 0.00001378 },
    { timestamp: 1625947800000, value: 0.00001512 },
  ];

  return (
    <View className="bg-purple-900/50 p-4 rounded-2xl m-4">
      <Text className="text-white text-xl font-bold mb-4">Historial de Precio</Text>
      <LineChart.Provider data={sampleData}>
        <LineChart height={200}>
          <LineChart.Path color="#FFD700" />
          <LineChart.CursorCrosshair color="#FFD700">
            <LineChart.Tooltip />
          </LineChart.CursorCrosshair>
        </LineChart>
        <LineChart.PriceText
          format={({ value }) => `$${value.toFixed(8)}`}
          style={{ color: '#FFD700', fontSize: 18 }}
        />
        <LineChart.TimeText
          style={{ color: '#FFFFFF', fontSize: 14 }}
        />
      </LineChart.Provider>
    </View>
  );
};

export default PriceChart;
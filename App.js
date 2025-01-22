import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <LinearGradient
      colors={['#000000', '#1A1A1A']}
      className="flex-1"
    >
      <StatusBar style="light" />
      <AppNavigator />
    </LinearGradient>
  );
}
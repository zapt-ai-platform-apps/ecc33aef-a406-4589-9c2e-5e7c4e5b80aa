import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../components/HomeScreen';
import MemeGallery from '../components/MemeGallery';
import BuyGuide from '../components/BuyGuide';
import CommunityLinks from '../components/CommunityLinks';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch(route.name) {
              case 'Inicio': iconName = 'home'; break;
              case 'Memes': iconName = 'image'; break;
              case 'Comprar': iconName = 'shopping-cart'; break;
              case 'Comunidad': iconName = 'group'; break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#1A1A1A',
            borderTopWidth: 0,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Memes" component={MemeGallery} />
        <Tab.Screen name="Comprar" component={BuyGuide} />
        <Tab.Screen name="Comunidad" component={CommunityLinks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
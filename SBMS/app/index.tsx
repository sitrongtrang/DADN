import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../views/MessageScreen';
import DashboardScreen from '../views/DashboardScreen';
import DeviceScreen from '../views/DeviceScreen';
import LoginScreen from '../views/LoginScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import FanDetailScreen from '../views/FanDetailScreen';
import LightDetailScreen from '../views/LightDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Devices">
      <Stack.Screen name="Devices" component={DeviceScreen} />
      <Stack.Screen name="FanDetail" component={FanDetailScreen} />
      <Stack.Screen name="LightDetail" component={LightDetailScreen} />
    </Stack.Navigator>
  );
};

export default App;
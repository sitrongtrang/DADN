import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthProvider} from '../context/AuthContext';
import MessageScreen from '../views/MessageScreen';
import DashboardScreen from '../views/DashboardScreen';
import DeviceScreen from '../views/DeviceScreen';
import FanDetailScreen from '../views/FanDetailScreen';
import LightDetailScreen from '../views/LightDetailScreen';

//Khanh start be
import LoginScreen from '../views/LoginScreen';
import WelcomeScreen from '../views/WelcomeScreen';
import AccountInfoScreen from '../views/AccountInfoScreen'
import SignupScreen from '../views/SignupScreen'
//Khanh end be

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Profile" component={AccountInfoScreen}/>
          {/* <Stack.Screen name="Devices" component={DeviceScreen} />
          <Stack.Screen name="FanDetail" component={FanDetailScreen} />
          <Stack.Screen name="LightDetail" component={LightDetailScreen} /> */}
        </Stack.Navigator>
    </AuthProvider>
  );
};

export default App;
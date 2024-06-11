import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AuthProvider} from '../context/AuthContext';

import MessageScreen from '../views/MessageScreen';
import DashboardScreen from '../views/DashboardScreen';
import DeviceScreen from '../views/DeviceScreen';
import FanDetailScreen from '../views/FanDetailScreen';
import LightDetailScreen from '../views/LightDetailScreen';
import AlarmScreen from "../views/AlarmScreen";
import BottomBarNavigation from "@/components/navigation/BottomBarNavigation";
import { SafeAreaView } from "react-native";
import DeviceComponent from "@/components/DeviceComponent";

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
        <Stack.Navigator initialRouteName="Devices">
          <Stack.Screen
          name="Main"
          component={BottomBarNavigation}
          options={{ headerShown: false }}
          />

          <Stack.Screen name="DeviceScreen" component={DeviceScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="Profile" component={AccountInfoScreen}/>
        </Stack.Navigator>
    </AuthProvider>
  );
};

export default App;

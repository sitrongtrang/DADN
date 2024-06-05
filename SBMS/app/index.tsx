import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessageScreen from '../views/MessageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <MessageScreen></MessageScreen>
  );
};

export default App;
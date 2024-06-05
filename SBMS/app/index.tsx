import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../views/HistoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <HistoryScreen></HistoryScreen>
  );
};

export default App;
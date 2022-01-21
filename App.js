import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ActivityIndicator, Text, View } from 'react-native';
import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation/Navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
    
  );
};

export default App;

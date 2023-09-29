import React from 'react';
import { StatusBar } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import Rotes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2525f5" barStyle="dark-content"/>
      <Rotes/>
    </NavigationContainer>
    
  );
};
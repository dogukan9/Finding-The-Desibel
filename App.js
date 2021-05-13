import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigator/navigator';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export default function App() {
  return (
    
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    
  );
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './components/StackNavigator';
// import SignUp from './components/SignUp';
// import Login from './components/Login';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

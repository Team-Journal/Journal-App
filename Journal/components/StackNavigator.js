import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../components/SignUp';
import SignUpNext from '../components/SignUpNext';
import Login from '../components/Login';
import DoneSignUp from '../components/DoneSignUp';
import MainPage from '../components/MainPage';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} independent={true}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUpNext" component={SignUpNext} />
      <Stack.Screen name="DoneSignUp" component={DoneSignUp} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};

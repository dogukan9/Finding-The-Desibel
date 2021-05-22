import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/login/login';
import RegisterFormScreen from '../Screens/registerForm/registerForm';
import AcceptFormScreen from '../Screens/acceptForm/accept';
import InstructionScreen from '../Screens/ınstructions/instruction';
import ListenScreen from '../Screens/listen/listen';
import ResultScreen from '../Screens/result/result';
import QuestionScreen from '../Screens/question/question';
import EarOptionScreen from '../Screens/earOption/earOption';

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='login'
        component={LoginScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='register'
        component={RegisterFormScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='accept'
        component={AcceptFormScreen}
        options={{headerShown:false}}
      ></Stack.Screen>
      <Stack.Screen
        name='instruction'
        component={InstructionScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='earOption'
        component={EarOptionScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='listen'
        component={ListenScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name='question'
        component={QuestionScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>

      <Stack.Screen
        name='result'
        component={ResultScreen}
        options={{headerShown:false}}
      ></Stack.Screen>
      
    </Stack.Navigator>
    
    
  );
};

export default StackNavigation;

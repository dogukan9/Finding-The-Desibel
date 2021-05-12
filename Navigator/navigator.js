import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../Screens/login/login";
import MainScreen from "../Screens/main/main";
import AcceptFormScreen from "../Screens/acceptForm/accept";
import InstructionScreen from "../Screens/ınstructions/instruction";
import ListenScreen from "../Screens/listen/listen";
import ResultScreen from "../Screens/result/result";
import QuestionScreen from "../Screens/question/question";
import EarOptionScreen from "../Screens/earOption/earOption";

const Stack=createStackNavigator();


const StackNavigation=(props)=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="Main" component={MainScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="Accept" component={AcceptFormScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="Instruction" component={InstructionScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="earOption" component={EarOptionScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="listen" component={ListenScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="question" component={QuestionScreen} options={{}}></Stack.Screen>
            <Stack.Screen name="result" component={ResultScreen} options={{}}></Stack.Screen>

        </Stack.Navigator>
    )
}

export default StackNavigation;
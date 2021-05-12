import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./Navigator/navigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

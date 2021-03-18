import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../pages/Splash";
import RootStackScreen from "./RootStackScreen";

function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default AppNavigationContainer;

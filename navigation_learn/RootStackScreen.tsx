import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/Apptypes";
import DrawerScreen from "./DrawerScreen";
import AuthStackScreen from "./AuthStackScreen";

const RootStack = createStackNavigator<RootStackParamList>();

function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ animationEnabled: false }}>
      <RootStack.Screen name="App" component={DrawerScreen} />
      {/* <RootStack.Screen name="Auth" component={AuthStackScreen} /> */}
    </RootStack.Navigator>
  );
}

export default RootStackScreen;

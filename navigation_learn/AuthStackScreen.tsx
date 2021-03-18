import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/Apptypes";
import SignIn from "../pages/SignIn";
import CreateAccount from "../pages/CreateAccount";

const AuthStack = createStackNavigator<AuthStackParamList>();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;

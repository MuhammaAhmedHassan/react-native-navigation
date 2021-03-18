import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileStackParamList } from "../types/Apptypes";
import Profile from "../pages/Profile";

const ProfileStack = createStackNavigator<ProfileStackParamList>();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;

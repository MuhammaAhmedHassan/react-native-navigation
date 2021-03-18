import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, Button } from "react-native";
import { DrawerParamList, ProfileStackParamList } from "../types/Apptypes";
import ScreenContainer from "./ScreenContainer";

type Props = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  StackNavigationProp<ProfileStackParamList, "Profile">
>;

function Profile(props: Props) {
  const navigation = props;

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button
        title="Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Button
        title="Sign Out"
        onPress={() => {
          //   signOut()
        }}
      />
    </ScreenContainer>
  );
}

export default Profile;

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "../types/Apptypes";
import TabsScreen from "./TabsScreen";
import ProfileStackScreen from "./ProfileStackScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerScreen;

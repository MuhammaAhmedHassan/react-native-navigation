import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsParamList } from "../types/Apptypes";
import HomeStackScreen from "./HomeStackScreen";
import SearchStackScreen from "./SearchStackScreen";

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

function TabsScreen() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeTab" component={HomeStackScreen} />
      <Tabs.Screen name="SearchTab" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
}

export default TabsScreen;

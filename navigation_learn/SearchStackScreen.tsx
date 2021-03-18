import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsParamList, SearchStackParamList } from "../types/Apptypes";
import Search from "../pages/Search";
import Search2 from "../pages/Search2";

const SearchStack = createStackNavigator<SearchStackParamList>();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Search2" component={Search2} />
    </SearchStack.Navigator>
  );
}

export default SearchStackScreen;

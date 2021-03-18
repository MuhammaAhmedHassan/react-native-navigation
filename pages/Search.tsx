import * as React from "react";
import { Text, Button } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabsParamList, SearchStackParamList } from "../types/Apptypes";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type Props = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsParamList, "SearchTab">,
  StackNavigationProp<SearchStackParamList, "Search">
>;

function Search(props: Props) {
  const navigation = props;
  return (
    <ScreenContainer>
      <Text>Search Screen</Text>
      <Button
        title="Search 2"
        onPress={() => {
          navigation.push("Search2");
        }}
      />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.navigate("HomeTab", {
            screen: "Details",
            params: { name: "React Native School" },
          });
        }}
      />
    </ScreenContainer>
  );
}

export default Search;

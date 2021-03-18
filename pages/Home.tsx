import * as React from "react";
import { StyleSheet, Button, Text } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types/Apptypes";

type Props = StackScreenProps<HomeStackParamList, "Home">;

function Home(props: Props) {
  const { navigation, route } = props;
  return (
    <ScreenContainer>
      <Text>Master List Screen</Text>
      <Button
        title="React Native by Example"
        onPress={() => {
          navigation.push("Details", { name: "React Native by Example " });
        }}
      />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.push("Details", { name: "React Native School" });
        }}
      />
      <Button
        title="Drawer"
        onPress={() => {
          // navigation.toggleDrawer()
        }}
      />
    </ScreenContainer>
  );
}

export default Home;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

import * as React from "react";
import { Text } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types/Apptypes";

type Props = StackScreenProps<HomeStackParamList, "Details">;

function Details(props: Props) {
  const { route, navigation } = props;
  return (
    <ScreenContainer>
      <Text>Details Screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </ScreenContainer>
  );
}

export default Details;

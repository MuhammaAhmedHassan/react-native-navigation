import * as React from "react";
import { Text, Button } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/Apptypes";

type Props = StackScreenProps<AuthStackParamList, "SignIn">;

function SignIn(props: Props) {
  const { navigation, route } = props;
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button
        title="Sign In"
        onPress={() => {
          //   signIn()
        }}
      />
      <Button
        title="Create Account"
        onPress={() => {
          navigation.push("CreateAccount");
        }}
      />
    </ScreenContainer>
  );
}

export default SignIn;

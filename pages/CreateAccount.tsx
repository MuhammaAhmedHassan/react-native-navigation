import * as React from "react";
import { Text, Button } from "react-native";
import ScreenContainer from "./ScreenContainer";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../types/Apptypes";

type Props = StackScreenProps<AuthStackParamList, "CreateAccount">;

function CreateAccount(props: Props) {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          //   signUp()
        }}
      />
    </ScreenContainer>
  );
}

export default CreateAccount;

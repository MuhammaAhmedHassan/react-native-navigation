import * as React from "react";
import { StyleSheet, View } from "react-native";

function ScreenContainer(props: React.PropsWithChildren<{}>) {
  return <View style={styles.container}>{props.children}</View>;
}

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OperationList } from "./components/OperationList";

export const VisualizeDetails = ({ route, navigation }) => {
  const { SKU } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <OperationList />
      <View style={styles.container}>
        <Text>{SKU}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
});

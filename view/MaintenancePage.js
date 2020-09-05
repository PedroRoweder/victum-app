import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MaintenancePage = ({ navigator }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MaintenancePage Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});

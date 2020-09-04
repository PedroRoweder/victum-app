import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProductionPage = ({ navigator }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Production Page</Text>
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

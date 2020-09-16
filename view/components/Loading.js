import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const Loading = ({ loadingStatus }) => {
  if (loadingStatus) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#004645" />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

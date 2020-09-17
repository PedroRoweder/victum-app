import React from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";

export const Loading = ({ loadingStatus }) => {
  if (loadingStatus) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.gif}
          source={require("../../images/loadingbckgalphagif.gif")}
        />
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
    alignItems: "center",
  },
  gif: {
    height: "20%",
    width: "40%",
  },
});

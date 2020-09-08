import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export const OperationList = ({ operationQuantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => alert("touched")}
          underlayColor="white"
          style={styles.touchable}
        >
          <View style={styles.button}>
            <Text>Teste</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => alert("touched")}
          underlayColor="white"
          style={styles.touchable}
        >
          <View style={styles.button}>
            <Text>Teste</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    maxHeight: "10%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "green",
  },
  buttonContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  touchable: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
});

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export const OperationList = ({ operationQuantity }) => {
  const getButtonColor = (operationStage) => {
    switch (operationStage) {
      case "DONE":
        return "#35CE8D";
        break;
      case "DOING":
        return "#DD403A";
        break;
      case "TODO":
        return "#444";
        break;
    }
  };

  //This is a placeholder for the operation list that we will get
  //from the visualizeList.js request
  const buttons = [
    { operationText: "OP1 - SF1", operationStage: "DONE" },
    { operationText: "OP2 - SF2", operationStage: "DOING" },
    { operationText: "OP3 - SF3", operationStage: "TODO" },
  ];

  const buttonList = buttons.map((item) => {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={() => alert("touched")}
          underlayColor="white"
          style={styles.touchable}
        >
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 10,
              backgroundColor: getButtonColor(item.operationStage),
            }}
          ></View>
        </TouchableHighlight>
        <Text style={styles.text}>{item.operationText}</Text>
      </View>
    );
  });

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.buttonContainer}>{buttonList}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    maxHeight: "10%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  touchable: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    color: "#444",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 12,
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
});
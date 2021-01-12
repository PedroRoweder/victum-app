import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export const OperationList = ({ operationListInfo, onPress }) => {
  const getButtonColor = (status) => {
    switch (status) {
      case "TODO":
        return "#444";
      case "DONE":
        return "#E6AF2E";
      case "DOING":
        return "#35CE8D";
    }
  };

  const buttonList = operationListInfo.map((item, index) => {
    return (
<<<<<<< Updated upstream
      <View style={styles.mainContainer} key={index}>
=======
      <View key={index} style={styles.mainContainer}>
>>>>>>> Stashed changes
        <TouchableHighlight
          onPress={() => onPress(index)}
          underlayColor="white"
          style={styles.touchable}
        >
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 10,
              backgroundColor: getButtonColor(item.status),
            }}
          ></View>
        </TouchableHighlight>
        <Text style={styles.text}>
          OP{index + 1} - {item.operationTitle}
        </Text>
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
    borderBottomColor: "#ddd",
    borderBottomWidth: 3,
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

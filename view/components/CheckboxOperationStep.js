import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Checkbox, Title } from "react-native-paper";

export const CheckboxOperationStep = ({ stepContent }) => {
  // There's a problem with this component, it renders
  // all the checkboxes correctly, but it checkes all of them
  // at once

  //This useState is probably the cause of the problem
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{stepContent.title}</Title>
      {stepContent.content.map((item, index) => {
        return (
          <Checkbox.Item
            label={item}
            key={index}
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "2%",
    padding: "2%",
  },
  title: {
    fontSize: 25,
  },
  text: {
    marginHorizontal: "2%",
    fontSize: 20,
  },
});

/*
borderColor: "red",
borderWidth: 1,
borderStyle: "solid",
*/

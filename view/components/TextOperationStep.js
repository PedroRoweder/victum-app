import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";

export const TextOperationStep = ({ stepContent }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{stepContent.title}</Title>
      {stepContent.content.map((item, index) => {
        return (
          <Text key={index} style={styles.text}>
            {item}
          </Text>
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
    fontSize: 20,
  },
  text: {
    marginHorizontal: "2%",
    color: "#767676",
    fontSize: 18,
  },
});

/*
borderColor: "red",
borderWidth: 1,
borderStyle: "solid",
*/

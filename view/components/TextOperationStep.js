import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Title } from "react-native-paper";

export const TextOperationStep = ({ stepContent }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>{stepContent.title}</Title>
      {stepContent.content.map((item) => {
        return <Text style={styles.text}>{item}</Text>;
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

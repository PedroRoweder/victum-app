import React from "react";
import { StatusBar } from "expo-status-bar";
import { MainButtonList } from "./MainButtonList";
import { StyleSheet, View, Image, Text } from "react-native";
import img from "../images/autopflege_vetor-2.png";

export const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.header}></Image>
      <MainButtonList navigation={navigation} />
      <StatusBar visible="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  header: {
    marginTop: 100,
    height: 250,
    width: "96%",
    marginHorizontal: "2%",
    resizeMode: "contain",
  },
});

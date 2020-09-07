import React from "react";
import { StatusBar } from "expo-status-bar";
import { MainButtonList } from "./components/MainButtonList";
import { StyleSheet, View, Image, Text, Linking } from "react-native";
import img from "../images/autopflege_vetor-2.png";

export const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.header}></Image>
      <MainButtonList navigation={navigation} />
      <StatusBar visible="auto" />
      <View style={styles.footer}>
        <Text>v0.0.1a</Text>
        <Text>
          Copyright &copy; 2020 by{" "}
          <Text style={{ fontWeight: "bold" }}>Sicario Programming</Text>
        </Text>
      </View>
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
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 1,
  },
});

import React from "react";
import { Provider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { MainButtonList } from "./components/MainButtonList";
import { StyleSheet, View, Image } from "react-native";
import img from "./images/autopflege_vetor-2.png";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Image source={img} style={styles.header}></Image>
        <MainButtonList />
        <StatusBar visible="auto" />
      </View>
    </Provider>
  );
}

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
  title: {
    fontSize: 50,
    color: "black",
    position: "absolute",
  },
});

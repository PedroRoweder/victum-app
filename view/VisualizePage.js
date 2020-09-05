import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const VisualizePage = ({ navigator }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          theme={{
            colors: {
              primary: "#004645",
              underlineColor: "#004645",
            },
          }}
          label="Teste"
          mode="outlined"
          value={text}
          style={styles.input}
          onChangeText={(text) => setText(text)}
        />
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            color="#004546"
            onPress={() => alert("Open Bar Code Scanner")}
            style={styles.button}
            labelStyle={styles.text}
            title="SCAN"
          >
            SCAN
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  input: {
    marginTop: "2%",
    width: "96%",
    marginHorizontal: "2%",
  },
  buttonContainer: {
    flex: 1,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 5,
    marginHorizontal: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    padding: 0,
    margin: 5,
  },
  text: {
    paddingVertical: 18,
    borderRadius: 50,
    /*display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    lineHeight: 38,*/
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
});

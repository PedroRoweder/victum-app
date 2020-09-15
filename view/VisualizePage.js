import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, FAB, List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { VisualizeList } from "./components/VisualizeList";

export const VisualizePage = ({ route, navigation }) => {
  const [text, setText] = useState("");
  //const { barData } = route.params;
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
          label="Pesquisa..."
          mode="outlined"
          value={text}
          style={styles.input}
          onChangeText={(text) => setText(text)}
        />
        <VisualizeList navigation={navigation} searchText={text} />
        <FAB
          style={styles.fab}
          large
          icon="camera"
          onPress={() => navigation.navigate("barcodeReader")}
          color="#004645"
        />
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#00c9c7",
  },
});

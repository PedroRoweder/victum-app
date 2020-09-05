import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export const MainButtonList = ({ navigation }) => {
  return (
    <View style={styles.buttonGroup}>
      <Button
        color="#444444"
        style={styles.buttons}
        mode="contained"
        onPress={() => navigation.navigate("production")}
      >
        Produção
      </Button>
      <Button
        color="#444444"
        style={styles.buttons}
        mode="contained"
        onPress={() => navigation.navigate("maintence")}
      >
        Manutenção
      </Button>
      <Button
        color="#444444"
        style={styles.buttons}
        mode="contained"
        onPress={() => navigation.navigate("visualize")}
      >
        Visualizar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: "30%",
  },
  buttons: {
    marginBottom: 20,
    padding: 10,
    width: "84%",
    marginHorizontal: "8%",
  },
});

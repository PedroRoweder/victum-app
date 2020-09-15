import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OperationList } from "./components/OperationList";

export const VisualizeDetails = ({ route, navigation }) => {
  const { SKU } = route.params;

  //A Principio vai ter um request no banco a partir daqui
  //com o SKU recebido pra pegar as operações.
  //a seguir é somente um mockup do que irá retornar do banco
  //pode ser alterado.
  const operationList = [
    {
      operationTitle: "SF", //Serra Fita
      status: "TODO", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Setup de Máquina", //Dropdown title
          stepContent: [
            {
              title: "Matéria Prima",
              type: "text", //Type and content of the dropdown
              content: [
                "Material: Poliacetal Branco",
                "Diâmetro: 36mm",
                "Comprimento: 250mm",
                "Quantidade: 6 peças",
              ],
            },
          ],
        },
      ],
    },
    {
      operationTitle: "TR", //Torno
      status: "DONE", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Setup de Máquina", //Dropdown title
          stepContent: [
            {
              title: "Matéria Prima",
              type: "text", //Type and content of the dropdown
              content: ["POM O36 x 250mm", "6 peças"],
            },
            {
              title: "Programa",
              type: "checkbox", //Type and content of the dropdown
              content: ["1018.nc"],
            },
            {
              title: "Fixação",
              type: "checkbox", //Type and content of the dropdown
              content: ["Castanha 01A", "Afastamento da placa 35mm"],
            },
            {
              title: "Ferramentas",
              type: "checkbox", //Type and content of the dropdown
              content: ["T0101", "T0202", "T0303", "T0404", "T0505"],
            },
            {
              title: "Batente de Segurança",
              type: "checkbox", //Type and content of the dropdown
              content: ["95mm"],
            },
          ],
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <OperationList />
      <View style={styles.container}>
        <Text>{SKU}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
  border: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "blue",
  },
});

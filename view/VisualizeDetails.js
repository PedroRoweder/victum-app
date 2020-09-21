import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { OperationList } from "./components/OperationList";
import { OperationDetails } from "./components/OperationDetails";

export const VisualizeDetails = ({ route, navigation }) => {
  const { SKU } = route.params;
  const operationListInfo = [];
  const operationDetailsInfo = [];
  const [operationIndex, setOperationIndex] = useState(0);

  //A Principio vai ter um request no banco a partir daqui
  //com o SKU recebido pra pegar as operações.
  //a seguir é somente um mockup do que irá retornar do banco
  //pode ser alterado.
  const operationList = [
    {
      operationTitle: "SF", //Serra Fita
      status: "DONE", //DOING, DONE, TODO.
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
        {
          //Each dropdown that the operation has.
          title: "Outro Setup de Maquina", //Dropdown title
          stepContent: [
            {
              title: "Seloko",
              type: "text", //Type and content of the dropdown
              content: [
                "Material: Poliacetal Negro",
                "Diâmetro: 216mm",
                "Comprimento: 1250mm",
                "Quantidade: 900 peças",
              ],
            },
            {
              title: "Funciona",
              type: "text", //Type and content of the dropdown
              content: [
                "Não é mesmo?",
                "penis",
                "vagina",
                "Quantidade: 40 peças",
              ],
            },
            {
              title: "Funciona",
              type: "text", //Type and content of the dropdown
              content: [
                "Não é mesmo?",
                "penis",
                "vagina",
                "Quantidade: 40 peças",
              ],
            },
            {
              title: "Funciona",
              type: "text", //Type and content of the dropdown
              content: [
                "Não é mesmo?",
                "penis",
                "vagina",
                "Quantidade: 40 peças",
              ],
            },
            {
              title: "Funciona",
              type: "text", //Type and content of the dropdown
              content: [
                "Não é mesmo?",
                "penis",
                "vagina",
                "Quantidade: 40 peças",
              ],
            },
            {
              title: "Funciona",
              type: "text", //Type and content of the dropdown
              content: [
                "Não é mesmo?",
                "penis",
                "vagina",
                "Quantidade: 40 peças",
              ],
            },
          ],
        },
      ],
    },
    {
      operationTitle: "TR", //Torno
      status: "DOING", //DOING, DONE, TODO.
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
    {
      operationTitle: "PENIS", //Torno
      status: "TODO", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Measurement", //Dropdown title
          stepContent: [
            {
              title: "Batente de Segurança",
              type: "measurement", //Type and content of the dropdown
              imageURL: "https://i.imgur.com/3vUtVcr.png",
              content: [
                { min: "Ø23.99", max: "Ø24.02" },
                { min: "Ø32.28", max: "Ø32.32" },
                { min: "Ø35", max: "Ø35.2" },
              ],
            },
          ],
        },
      ],
    },
  ];

  operationList.map((item) => {
    operationListInfo.push({
      operationTitle: item.operationTitle,
      status: item.status,
    });
    operationDetailsInfo.push(item.steps);
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <OperationList
        operationListInfo={operationListInfo}
        onPress={(index) => {
          setOperationIndex(index);
        }}
      />
      <OperationDetails
        operationDetailsInfo={operationDetailsInfo}
        operationIndex={operationIndex}
      />
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

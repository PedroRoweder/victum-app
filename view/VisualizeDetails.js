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
    // type Text
    {
      operationTitle: "TX",
      status: "DONE", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Text", //Dropdown title
          stepContent: [
            {
              title: "Matéria Prima",
              type: "text",
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
          title: "Outro Text", //Dropdown title
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
          ],
        },
      ],
    },
    //type Checkbox
    {
      operationTitle: "CB", //Torno
      status: "DOING", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Checkboxes", //Dropdown title
          stepContent: [
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
    //type Measurement
    {
      operationTitle: "MM", //Torno
      status: "TODO", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Measurement", //Dropdown title
          stepContent: [
            {
              title: "PenisVagina 234",
              type: "measurement", //Type and content of the dropdown
              imageURL: "https://i.imgur.com/3vUtVcr.png",
              content: [
                { min: "Ø23.99", max: "Ø24.02" },
                { min: "Ø32.28", max: "Ø32.32" },
                { min: "Ø35", max: "Ø35.2" },
                { min: "Ø23.99", max: "Ø24.02" },
                { min: "Ø32.28", max: "Ø32.32" },
                { min: "Ø35", max: "Ø35.2" },
                { min: "Ø23.99", max: "Ø24.02" },
                { min: "Ø32.28", max: "Ø32.32" },
                { min: "Ø35", max: "Ø35.2" },
              ],
            },
          ],
        },
      ],
    },
    //type Measurement-Check
    {
      operationTitle: "MC", //Torno
      status: "TODO", //DOING, DONE, TODO.
      steps: [
        {
          //Each dropdown that the operation has.
          title: "Measurement Check", //Dropdown title
          stepContent: [
            {
              title: "Aferição de Lote",
              type: "measurement-check", //Type and content of the dropdown
              content: ["N1", "N2", "N3", "N5", "N10", "N50", "N100"],
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

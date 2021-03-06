import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Loading } from "./components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { OperationList } from "./components/OperationList";
import { OperationDetails } from "./components/OperationDetails";
import api from "../api.js";

export const VisualizeDetails = ({ route, navigation }) => {
  const { SKU } = route.params;
  const operationListInfo = [];
  const operationDetailsInfo = [];
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [operationList, setOperationList] = useState([]);
  const [operationIndex, setOperationIndex] = useState(0);

  //A Principio vai ter um request no banco a partir daqui
  //com o SKU recebido pra pegar as operações.
  //a seguir é somente um mockup do que irá retornar do banco
  //pode ser alterado.

  const claimPartsInfo = async () => {
    const response = await api.get(`/parts/${SKU}`);

    setOperationList(response.data.part.operationList);
  };

  useEffect(() => {
    claimPartsInfo();
    setLoadingStatus(false);
  }, []);

  useEffect(() => {
    operationList.map((item) => {
      operationListInfo.push({
        operationTitle: item.operationTitle,
        status: item.status,
      });
      operationDetailsInfo.push(item.steps);
    });
    console.log(operationDetailsInfo);
  }, [operationList]);

  // const operationList = [
  //   // type Text
  //   {
  //     operationTitle: "TX",
  //     status: "DONE", //DOING, DONE, TODO.
  //     steps: [
  //       {
  //         //Each dropdown that the operation has.
  //         title: "Text", //Dropdown title
  //         stepContent: [
  //           {
  //             title: "Matéria Prima",
  //             type: "text",
  //             content: [
  //               "Material: Poliacetal Branco",
  //               "Diâmetro: 36mm",
  //               "Comprimento: 250mm",
  //               "Quantidade: 6 peças",
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         //Each dropdown that the operation has.
  //         title: "Outro Text", //Dropdown title
  //         stepContent: [
  //           {
  //             title: "Teste",
  //             type: "text", //Type and content of the dropdown
  //             content: [
  //               "Material: Poliacetal Negro",
  //               "Diâmetro: 216mm",
  //               "Comprimento: 1250mm",
  //               "Quantidade: 900 peças",
  //             ],
  //           },
  //           {
  //             title: "Teste",
  //             type: "text", //Type and content of the dropdown
  //             content: [
  //               "Isso é um teste",
  //               "Teste",
  //               "Testando",
  //               "Quantidade: 40 peças",
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   //type Checkbox
  //   {
  //     operationTitle: "CB", //Torno
  //     status: "DOING", //DOING, DONE, TODO.
  //     steps: [
  //       {
  //         //Each dropdown that the operation has.
  //         title: "Checkboxes", //Dropdown title
  //         stepContent: [
  //           {
  //             title: "Programa",
  //             type: "checkbox", //Type and content of the dropdown
  //             content: ["1018.nc"],
  //           },
  //           {
  //             title: "Fixação",
  //             type: "checkbox", //Type and content of the dropdown
  //             content: ["Castanha 01A", "Afastamento da placa 35mm"],
  //           },
  //           {
  //             title: "Ferramentas",
  //             type: "checkbox", //Type and content of the dropdown
  //             content: ["T0101", "T0202", "T0303", "T0404", "T0505"],
  //           },
  //           {
  //             title: "Batente de Segurança",
  //             type: "checkbox", //Type and content of the dropdown
  //             content: ["95mm"],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   //type Measurement
  //   {
  //     operationTitle: "MM", //Torno
  //     status: "TODO", //DOING, DONE, TODO.
  //     steps: [
  //       {
  //         //Each dropdown that the operation has.
  //         title: "Measurement", //Dropdown title
  //         stepContent: [
  //           {
  //             title: "Testando 234",
  //             type: "measurement", //Type and content of the dropdown
  //             imageURL: "https://i.imgur.com/3vUtVcr.png",
  //             content: {
  //               sample: [
  //                 "N1",
  //                 "N2",
  //                 "N3",
  //                 "N5",
  //                 "N10",
  //                 "N20",
  //                 "N50",
  //                 "N100",
  //                 "N200",
  //               ],
  //               measure: [
  //                 { min: "Ø23.99", max: "Ø24.02" },
  //                 { min: "Ø32.28", max: "Ø32.32" },
  //                 { min: "Ø35", max: "Ø35.2" },
  //                 { min: "Ø23.99", max: "Ø24.02" },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     //type table
  //     operationTitle: "TB", //Torno
  //     status: "TODO", //DOING, DONE, TODO.
  //     steps: [
  //       {
  //         //Each dropdown that the operation has.
  //         title: "Setup de máquina", //Dropdown title
  //         stepContent: [
  //           {
  //             title: "Ferramentas",
  //             type: "tool-table", //Type and content of the dropdown
  //             content: {
  //               columns: ["", "INSERTO", "FERRAMENTA", "SUPORTE"],
  //               rows: [
  //                 ["", "MNMG200", "--", "BEDAME 2MM"],
  //                 ["", "TCGT09", "16MM INT.", "FIXO 16MM"],
  //                 ["", "TMAX", "TMAX 23,5", "--"],
  //                 ["", "--", "--", "--"],
  //                 ["", "--", "--", "--"],
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  return loadingStatus ? (
    <Loading loadingStatus={loadingStatus} />
  ) : (
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

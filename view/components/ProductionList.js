import React, { useState, useEffect } from "react";
import { List, Text } from "react-native-paper";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Loading } from "./Loading";

export const ProductionList = ({ navigation, searchText }) => {
  const items = [
    { SKU: "APF01", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF02", desc: "Teste testando" },
    { SKU: "APF03", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF04", desc: "Teste testando" },
    { SKU: "APF05", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF06", desc: "Teste testando" },
    { SKU: "APF07", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF08", desc: "Teste testando" },
    { SKU: "APF09", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF10", desc: "Teste testando" },
    { SKU: "APF11", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF12", desc: "Teste testando" },
    { SKU: "APF13", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF14", desc: "Teste testando" },
    { SKU: "APF15", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF16", desc: "Teste testando" },
    { SKU: "APF17", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF18", desc: "Teste testando" },
    { SKU: "APF19", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF20", desc: "Teste testando" },
    { SKU: "APF21", desc: "Teste testando" },
    { SKU: "APF22", desc: "Teste testando" },
    { SKU: "APF23", desc: "Teste testando" },
    { SKU: "APF24", desc: "Teste testando" },
  ];
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const list = items
        .filter(
          (item) =>
            item.SKU.toUpperCase().indexOf(searchText.toUpperCase()) != -1 ||
            item.desc.toUpperCase().indexOf(searchText.toUpperCase()) != -1
        )
        .map((item) => {
          return (
            <List.Item
              key={item.SKU}
              title={item.SKU}
              description={item.desc}
              left={(props) => <List.Icon {...props} icon="wrench" />}
              onPress={() => {
                //Here we will make a request to get the "item" with
                //the details and send it to the visualizeDetails page
                navigation.navigate("visualizeDetails", item);
              }}
            />
          );
        });
      setItemList(list);
      setLoadingStatus(false);
    }, 1500);
  }, []);

  return (
    <>
      <Loading loadingStatus={loadingStatus} />
      {!loadingStatus && <ScrollView>{itemList}</ScrollView>}
    </>
  );
};

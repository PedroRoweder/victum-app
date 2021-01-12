import React, { useState, useEffect } from "react";
import { List, Text } from "react-native-paper";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Loading } from "./Loading";

export const VisualizeList = ({ navigation, searchText }) => {
  const items = [
    { SKU: "APF01", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF02", desc: "Teste teste teste" },
    { SKU: "APF03", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF04", desc: "Teste teste teste" },
    { SKU: "APF05", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF06", desc: "Teste teste teste" },
    { SKU: "APF07", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF08", desc: "Teste teste teste" },
    { SKU: "APF09", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF10", desc: "Teste teste teste"},
    { SKU: "APF11", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF12", desc: "Teste teste teste" },
    { SKU: "APF13", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF14", desc: "Teste teste teste" },
    { SKU: "APF15", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF16", desc: "Teste teste teste" },
    { SKU: "APF17", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF18", desc: "Teste teste teste" },
    { SKU: "APF19", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF20", desc: "Teste teste teste" },
    { SKU: "APF21", desc: "Teste teste teste"},
    { SKU: "APF22", desc: "Teste teste teste" },
    { SKU: "APF23", desc: "Teste teste teste" },
    { SKU: "APF24", desc:"Teste teste teste" },
  ];
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const list = items.map((item) => {
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
  }, []);

  return (
    <>
      <Loading loadingStatus={loadingStatus} />
      {!loadingStatus && (
        <ScrollView>
          {itemList.filter((item) => {
            return (
              item.props.title
                .toUpperCase()
                .indexOf(searchText.toUpperCase()) != -1 ||
              item.props.description
                .toUpperCase()
                .indexOf(searchText.toUpperCase()) != -1
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

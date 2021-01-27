import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Loading } from "./Loading";
import { List, Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../api.js";

export const VisualizeList = ({ navigation, searchText }) => {
  const [parts, setParts] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const claimPartsList = async () => {
    const response = await api.get("/parts");

    setParts(response.data.parts);
  };

  useEffect(() => {
    claimPartsList();
  }, []);

  useEffect(() => {
    const list = parts.map((item) => {
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
  }, [parts]);

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

import React, { useState, useEffect } from "react";
import { List, Text } from "react-native-paper";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const VisualizeList = () => {
  const items = [
    { SKU: "APF01", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF02", desc: "Penis vagina teste teste" },
    { SKU: "APF03", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF04", desc: "Penis vagina teste teste" },
    { SKU: "APF05", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF06", desc: "Penis vagina teste teste" },
    { SKU: "APF07", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF08", desc: "Penis vagina teste teste" },
    { SKU: "APF09", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF10", desc: "Penis vagina teste teste" },
    { SKU: "APF11", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF12", desc: "Penis vagina teste teste" },
    { SKU: "APF13", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF14", desc: "Penis vagina teste teste" },
    { SKU: "APF15", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF16", desc: "Penis vagina teste teste" },
    { SKU: "APF17", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF18", desc: "Penis vagina teste teste" },
    { SKU: "APF19", desc: "Reparo caixa de direção elétrica" },
    { SKU: "APF20", desc: "Penis vagina teste teste" },
    { SKU: "APF21", desc: "Penis vagina teste teste" },
    { SKU: "APF22", desc: "Penis vagina teste teste" },
    { SKU: "APF23", desc: "Penis vagina teste teste" },
    { SKU: "APF24", desc: "Penis vagina teste teste" },
  ];

  return (
    <ScrollView>
      {items.map((item) => {
        return (
          <List.Item
            key={item.SKU}
            title={item.SKU}
            description={item.desc}
            left={(props) => <List.Icon {...props} icon="wrench" />}
            onPress={() => alert(item.SKU)}
          />
        );
      })}
    </ScrollView>
  );
};

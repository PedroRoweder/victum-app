import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { List, Title } from "react-native-paper";

export const OperationDetails = ({ operationDetailsInfo, operationIndex }) => {
  //const subOperationSteps = operationDetailsInfo[operationIndex].map((item) => {
  // item.stepContent.map((item) => {
  //   return <List.Item title={item.title} />;
  // });
  //});

  const RenderContentList = ({ stepContent }) => {
    return stepContent.content.map((item) => {
      return <Text>{item}</Text>;
    });

    /*switch (content.type) {
      case "text":
        return;
      case "checkbox":
        return;
    }*/
  };

  const productionDetails = operationDetailsInfo[operationIndex].map(
    (step, index) => {
      return (
        <List.Accordion title={step.title} id={index + 1}>
          {/* {step.map((stepContent) => {
            console.log(stepContent);
            return (
              <View>
                <Title>{stepContent.title}</Title>
                <RenderContentList content={stepContent} />;
              </View>
            );
          })} */}
        </List.Accordion>
      );
    }
  );

  return (
    <View>
      <List.AccordionGroup>{productionDetails}</List.AccordionGroup>
    </View>
  );
};

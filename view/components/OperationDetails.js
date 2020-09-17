import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { List, Title } from "react-native-paper";

export const OperationDetails = ({ operationDetailsInfo, operationIndex }) => {
  //const subOperationSteps = operationDetailsInfo[operationIndex].map((item) => {
  // item.stepContent.map((item) => {
  //   return <List.Item title={item.title} />;
  // });
  //});

  const RenderContentList = (stepContent) => {
    /*
      THIS WORKS! But just returns plain text.
      Now, we need to create the separate 
      components, with styling and all.
      The components I know we need:
        - Text
        - Checkbox
        - Table
        - Measurement
      There wont be many more, maybe one or two.
    */
    return (
      <View>
        <Title>{stepContent.title}</Title>
        {stepContent.content.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    );

    /*switch (stepContent.type) {
      case "text":
        return <TextOperationStep content={stepContent}/>;
      //case "checkbox":
      //  return <CheckboxOperationStep />;
    }*/
  };

  const productionDetails = operationDetailsInfo[operationIndex].map(
    (step, index) => {
      return (
        <List.Accordion
          theme={{ colors: { primary: "#004645" } }}
          title={step.title}
          id={index + 1}
        >
          {step.stepContent.map((stepContent) => {
            return RenderContentList(stepContent);
          })}
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

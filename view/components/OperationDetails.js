import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { List, Title } from "react-native-paper";
import { TextOperationStep } from "./TextOperationStep";
import { CheckboxOperationStep } from "./CheckboxOperationStep";
import { MeasurementOperationStep } from "./MeasurementOperationStep";
import { MeasurementCheckOperationStep } from "./MeasurementCheckOperationStep";

export const OperationDetails = ({ operationDetailsInfo, operationIndex }) => {
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
    /*return (
      <View>
        <Title>{stepContent.title}</Title>
        {stepContent.content.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    );*/

    switch (stepContent.type) {
      case "text":
        return <TextOperationStep stepContent={stepContent} />;
      case "checkbox":
        return <CheckboxOperationStep stepContent={stepContent} />;
      //case "table":
      //  return;
      case "measurement":
        return <MeasurementOperationStep stepContent={stepContent} />;
      case "measure-check":
        return <MeasurementCheckOperationStep stepContent={stepContent} />;
    }
  };

  const productionDetails = operationDetailsInfo[operationIndex].map(
    (step, index) => {
      return (
        <List.Accordion
          id={index + 1}
          key={index + 1}
          style={styles.dropdown}
          theme={{ colors: { primary: "#004645" } }}
          title={step.title}
          titleStyle={styles.dropdownText}
        >
          {step.stepContent.map((stepContent) => {
            return RenderContentList(stepContent);
          })}
        </List.Accordion>
      );
    }
  );

  return (
    <ScrollView>
      <List.AccordionGroup>{productionDetails}</List.AccordionGroup>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropdownText: {
    fontSize: 25,
  },
  dropdown: {
    borderBottomColor: "#444",
    borderStyle: "solid",
    borderBottomWidth: 1,
  },
});

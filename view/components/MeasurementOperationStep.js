import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export const MeasurementOperationStep = ({ stepContent }) => {
  return (
    <>
      <Title style={styles.title}>Cotas</Title>
      <View style={styles.container}>
        <Image source={{ uri: stepContent.imageURL }} style={styles.image} />
        <ScrollView style={styles.aside}>
          {stepContent.content.map((item, index) => {
            return (
              <>
                <Title>Cota {index}</Title>
                <Text>Min.: {item.min}</Text>
                <Text>Máx.: {item.max}</Text>
              </>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "1%",
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
  title: {
    marginHorizontal: "2%",
    marginVertical: "1%",
  },
  image: {
    width: "70%",
    height: 400,
    borderColor: "green",
    borderWidth: 2,
    borderStyle: "solid",
  },
  aside: {
    borderColor: "blue",
    borderWidth: 2,
    borderStyle: "solid",
    display: "flex",
    width: "28%",
  },
});

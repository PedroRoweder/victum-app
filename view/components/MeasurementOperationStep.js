import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export const MeasurementOperationStep = ({ stepContent }) => {
  return (
    <>
      <Title style={styles.mainTitle}>{stepContent.title}</Title>
      <View style={styles.container}>
        <Image source={{ uri: stepContent.imageURL }} style={styles.image} />
        <ScrollView style={styles.aside}>
          {stepContent.content.map((item, index) => {
            return (
              <>
                <Title style={styles.title}>
                  Cota {String.fromCharCode(index + 65) /*ASCII*/}
                </Title>
                <Text style={styles.text}>Min.: {item.min}</Text>
                <Text style={styles.text}>Máx.: {item.max}</Text>
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
  },
  mainTitle: {
    marginHorizontal: "2%",
    marginVertical: "1%",
  },
  image: {
    width: "70%",
    height: 400,
  },
  aside: {
    display: "flex",
    width: "28%",
    height: 400,
  },
  title: {
    fontSize: 22,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 19,
    marginHorizontal: 19,
  },
});

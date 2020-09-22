import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Checkbox, Title } from "react-native-paper";

const Check = ({ label, onPress, value }) => {
  return (
    <Checkbox.Item
      label={label}
      labelStyle={styles.labels}
      color="#35CE8D"
      onPress={onPress}
      style={styles.checkbox}
      status={value ? "checked" : "unchecked"}
    />
  );
};

export const CheckboxOperationStep = ({ stepContent }) => {
  const [checks, setChecks] = useState([]);
  const [checked, setChecked] = useState([]);
  const [loadStatus, setLoadStatus] = useState(true);

  useEffect(() => {
    setChecks(
      stepContent.content.map((item, index) => (
        <Check
          key={index}
          label={item}
          value={getValue(index)}
          onPress={() => handleCheck(index)}
        />
      ))
    );
    setLoadStatus(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  function handleCheck(key) {
    let values = [...checked];
    let index = values.indexOf(key);

    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(key);
    }

    setChecked(values);
  }

  function getValue(key) {
    return checked.indexOf(key) > -1;
  }

  return (
    <>
      {(loadStatus && <ActivityIndicator size="small" color="#E6AF2E" />) || (
        <View style={styles.container}>
          <Title style={styles.title}>{stepContent.title}</Title>
          {checks}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "2%",
    padding: "2%",
  },
  title: {
    fontSize: 20,
  },
  labels: {
    color: "#767676",
    fontSize: 18,
  },
  checkbox: {
    marginLeft: "-2%",
  },
});

/*
borderColor: "red",
borderWidth: 1,
borderStyle: "solid",
*/

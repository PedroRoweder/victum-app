import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title, DataTable, Checkbox } from "react-native-paper";

const Check = ({ value, onPress }) => {
  return (
    <Checkbox
      color="#35CE8D"
      onPress={onPress}
      status={value ? "checked" : "unchecked"}
    />
  );
};

export const ToolTableOperationStep = ({ stepContent }) => {
  const [checks, setChecks] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    setChecks(
      stepContent.content.rows.map((item, index) => (
        <Check
          key={index}
          value={getValue(index)}
          onPress={() => handleCheck(index)}
        />
      ))
    );
    console.log(checks);
  }, [checked]);

  const handleCheck = (key) => {
    let values = [...checked];
    let index = values.indexOf(key);

    if (index > -1) {
      values.splice(index, 1);
    } else {
      values.push(key);
    }

    setChecked(values);
  };

  const getValue = (key) => {
    return checked.indexOf(key) > -1;
  };

  const tableTitle = stepContent.content.columns.map((item) => {
    return (
      <DataTable.Title style={styles.dataTableTitle}>{item}</DataTable.Title>
    );
  });

  const tableContent = stepContent.content.rows.map((row, rowIndex) => {
    return (
      <DataTable.Row style={styles.dataTableRows}>
        {row.map((rowItem, cellIndex) => {
          if (cellIndex == 0) {
            return <View style={styles.checkbox}>{checks[rowIndex]}</View>;
          } else {
            return (
              <DataTable.Cell style={styles.dataTableCell}>
                {rowItem}
              </DataTable.Cell>
            );
          }
        })}
      </DataTable.Row>
    );
  });

  return (
    <>
      <View style={styles.container}>
        <Title style={styles.title}>{stepContent.title}</Title>
        <DataTable style={styles.dataTable}>
          <DataTable.Header style={styles.dataTableRows}>
            {tableTitle}
          </DataTable.Header>
          {tableContent}
        </DataTable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    marginHorizontal: "2%",
  },
  title: {
    fontSize: 20,
  },
  text: {
    marginHorizontal: "2%",
    color: "#767676",
    fontSize: 18,
  },
  dataTable: {
    display: "flex",
    flex: 1,
    alignContent: "space-between",
  },
  dataTableTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  dataTableRows: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: "-2%",
  },
  dataTableCell: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1%",
  },
  checkbox: {
    width: "16.6%",
    justifyContent: "center",
    alignItems: "center",
  },
});

/* return (
      <DataTable.Row style={styles.dataTableRows}>
        {row.map((rowItem, cellIndex) => {
          if (cellIndex == 0) {
            return (
              <DataTable.Cell style={styles.dataTableCell}>
                {checks[rowIndex]}
              </DataTable.Cell>
            );
          } else {
            return (
              <DataTable.Cell style={styles.dataTableCell}>
                {rowItem}
              </DataTable.Cell>
            );
          }
        })}
      </DataTable.Row>
    ); */

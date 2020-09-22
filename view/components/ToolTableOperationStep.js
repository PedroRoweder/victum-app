import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Title, DataTable } from "react-native-paper";

export const ToolTableOperationStep = ({ stepContent }) => {
  const tableTitle = stepContent.content.columns.map((item) => {
    return (
      <DataTable.Title style={styles.dataTableTitle}>{item}</DataTable.Title>
    );
  });

  const tableContent = stepContent.content.rows.map((row) => {
    return (
      <DataTable.Row style={styles.dataTableRows}>
        {row.map((rowItem) => {
          return (
            <DataTable.Cell style={styles.dataTableCell}>
              {rowItem}
            </DataTable.Cell>
          );
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
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 0,
    display: "flex",
    flex: 1,
    alignContent: "space-between",
  },
  dataTableTitle: {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: 0,
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
});

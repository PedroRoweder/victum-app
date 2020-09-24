import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [imageName, setImageName] = useState("");

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

  const tableTitle = stepContent.content.columns.map((item, index) => {
    if (index == 0) {
      return <View style={styles.headerTitle}></View>;
    } else {
      return (
        <DataTable.Title style={styles.dataTableTitle}>{item}</DataTable.Title>
      );
    }
  });

  const ShowImageModal = () => {
    return (
      imageName != "--" && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modal}>
              <Text style={{ color: "black", fontSize: 20 }}>{imageName}</Text>

              <Image
                source={require("../../images/MNMG200.jpg")}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )
    );
  };

  const tableContent = stepContent.content.rows.map((row, rowIndex) => {
    if (rowIndex % 2 == 0) {
      return (
        <DataTable.Row style={styles.dataTableRowsEven}>
          {row.map((rowItem, cellIndex) => {
            if (cellIndex == 0) {
              return (
                <View style={styles.checkbox}>
                  <Text>{rowIndex + 1}</Text>
                  {checks[rowIndex]}
                </View>
              );
            } else {
              return (
                <DataTable.Cell
                  style={styles.dataTableCell}
                  onPress={() => {
                    setImageName(rowItem);
                    setModalVisible(true);
                  }}
                >
                  {rowItem}
                </DataTable.Cell>
              );
            }
          })}
        </DataTable.Row>
      );
    } else {
      return (
        <DataTable.Row style={styles.dataTableRowsOdd}>
          {row.map((rowItem, cellIndex) => {
            if (cellIndex == 0) {
              return (
                <View style={styles.checkbox}>
                  <Text>{rowIndex + 1}</Text>
                  {checks[rowIndex]}
                </View>
              );
            } else {
              return (
                <DataTable.Cell
                  style={styles.dataTableCell}
                  onPress={() => {
                    setImageName(rowItem);
                    setModalVisible(true);
                  }}
                >
                  {rowItem}
                </DataTable.Cell>
              );
            }
          })}
        </DataTable.Row>
      );
    }
  });

  return (
    <>
      <View style={styles.container}>
        <ShowImageModal />
        <Title style={styles.title}>{stepContent.title}</Title>
        <DataTable style={styles.dataTable}>
          <DataTable.Header style={styles.dataTableHeader}>
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
    marginHorizontal: "1%",
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
    borderColor: "#e9e9e9",
    borderWidth: 1,
    borderStyle: "solid",
  },
  dataTableHeader: {
    paddingHorizontal: 0,
    backgroundColor: "#e9e9e9",
  },
  headerTitle: {
    width: "15%",
  },
  dataTableTitle: {
    justifyContent: "center",
  },
  dataTableRowsEven: {
    justifyContent: "center",
    paddingHorizontal: "-2%",
  },
  dataTableRowsOdd: {
    justifyContent: "center",
    paddingHorizontal: "-2%",
    backgroundColor: "#e9e9e9",
  },
  dataTableCell: {
    justifyContent: "center",
    padding: "1%",
  },
  checkbox: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",

    width: "15%",
  },
  modal: {
    position: "absolute",
    flexDirection: "column-reverse",
    alignSelf: "center",
    alignItems: "center",
    marginHorizontal: "2%",
    marginVertical: "20%",
    backgroundColor: "#fff",
    width: "80%",
    height: "60%",
    padding: 2,
  },

  image: { width: "100%", height: "94%" },
});

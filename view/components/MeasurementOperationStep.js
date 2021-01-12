import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import {
  DataTable,
  Dialog,
  Portal,
  TextInput,
  Title,
  Paragraph,
  Button,
} from "react-native-paper";
import { COLORS } from "../../misc/colorPallete";

const SampleCheckForm = ({
  stepContent,
  handleSampleInput,
  getInputValue,
  nextMeasureSample,
  createContinueModalAlert,
  setMeasureModalState,
}) => {
  return (
    <>
      <ScrollView style={styles.modal}>
        <Title style={{ fontSize: 35, padding: 10 }}>
          {stepContent.content.sample[nextMeasureSample]}
        </Title>
        <View style={styles.modalInputContainer}>
          {stepContent.content.measure.map((item, index) => (
            <View styles={styles.modalInputContainer} key={index}>
              <>
                <Text style={styles.title}>
                  Cota {String.fromCharCode(index + 65) /*ASCII*/}
                </Text>
                <TextInput
                  value={getInputValue(
                    stepContent.content.sample[nextMeasureSample],
                    index
                  )}
                  onChangeText={(text) =>
                    handleSampleInput(
                      text,
                      stepContent.content.sample[nextMeasureSample],
                      index
                    )
                  }
                  style={styles.modalInput}
                  selectionColor={COLORS.logoGreen}
                  underlineColor={COLORS.logoGreen}
                  keyboardType="numeric"
                />
              </>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.modalButtonContainer}>
        <TouchableOpacity
          style={styles.modalCancelButton}
          onPress={() => setMeasureModalState(false)}
        >
          <Text style={styles.modalCancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalContinueButton}
          onPress={createContinueModalAlert}
        >
          <Text style={styles.modalContinueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const MeasurementOperationStep = ({ stepContent }) => {
  const [measureModalState, setMeasureModalState] = useState(false);
  const [nextMeasureSample, setNextMeasureSample] = useState(0);
  const [measureCheck, setMeasureCheck] = useState([]);
  const [tableRange, setTableRange] = useState([0, 2]);
  const [measureSampleInputs, setMeasureSampleInputs] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [currentSampleInput, setCurrentSampleInput] = useState([]);

  const handleSampleInput = (value, sample, index) => {
    // This method makes me want to kill myself
    let newObject = currentSampleInput;

    //if (newValue[stepContent.content.sample.indexOf(sample)]) {
    //  newObject = newValue[stepContent.content.sample.indexOf(sample)];
    //} else {
    //  newObject = {};
    //}
    newObject[index] = value;
    console.log(newObject);
    setCurrentSampleInput(newObject);
  };

  //Aqui
  const getInputValue = (sample, index) => {
    return currentSampleInput[index];
    //const input =
    //  measureSampleInputs[stepContent.content.sample.indexOf(sample)];
    //if (input) {
    //  return input[index];
    //} else {
    //  return "";
    //}
  };

  const SampleTable = ({ sample, measure }) => {
    const getHeaders = () =>
      measure.map((item, index) => {
        return (
          <DataTable.Title numeric>
            Cota {String.fromCharCode(index + 65) /*ASCII*/}
          </DataTable.Title>
        );
      });

    const getRowValue = (i) => {
      return (
        <>
          {measureSampleInputs[i] && (
            <>
              <DataTable.Cell numeric>
                {measureSampleInputs[i][0] || ""}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {measureSampleInputs[i][1] || ""}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {measureSampleInputs[i][2] || ""}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {measureSampleInputs[i][3] || ""}
              </DataTable.Cell>
            </>
          )}
        </>
      );
    };

    const getRows = () => {
      const rows = [];
      for (let i = tableRange[0]; i <= tableRange[1]; i++) {
        rows.push(
          <DataTable.Row>
            <DataTable.Cell>{sample[i]}</DataTable.Cell>
            {getRowValue(i)}
          </DataTable.Row>
        );
      }
      return rows;
    };

    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Amostra</DataTable.Title>
          {getHeaders()}
        </DataTable.Header>
        {getRows()}
      </DataTable>
    );
  };

  const createContinueModalAlert = () =>
    Alert.alert(
      "Continuar",
      "Os valores não poderão ser alterados, deseja confirmar?",
      [
        { text: "NÃO", style: "cancel" },
        {
          text: "SIM",
          onPress: () => {
            setNextMeasureSample(nextMeasureSample + 1);
            setMeasureModalState(false);
            // Adds current sample to whole samples object
            let allInputs = [...measureSampleInputs];
            allInputs.push(currentSampleInput);
            setMeasureSampleInputs(allInputs);
            setCurrentSampleInput([]);

            // The table stepper
            setTableRange([0, 2]);
            if (nextMeasureSample > 1) {
              setTableRange([tableRange[0] + 1, tableRange[1] + 1]);
            }
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={measureModalState}
        onRequestClose={() => {
          setMeasureModalState(false);
        }}
      >
        <View style={styles.modalContainer}>
          <SampleCheckForm
            stepContent={stepContent}
            getInputValue={getInputValue}
            handleSampleInput={handleSampleInput}
            nextMeasureSample={nextMeasureSample}
            createContinueModalAlert={createContinueModalAlert}
            setMeasureModalState={setMeasureModalState}
          />
        </View>
      </Modal>
      <Title style={styles.mainTitle}>{stepContent.title}</Title>
      <View style={styles.container}>
        <Image source={{ uri: stepContent.imageURL }} style={styles.image} />
        <ScrollView style={styles.aside}>
          {stepContent.content.measure.map((item, index) => {
            return (
              <View key={index}>
                <Title style={styles.title}>
                  Cota {String.fromCharCode(index + 65) /*ASCII*/}
                </Title>
                <Text style={styles.text}>Min.: {item.min}</Text>
                <Text style={styles.text}>Máx.: {item.max}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setMeasureModalState(true)}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Aferição de Lote</Text>
        </View>
      </TouchableOpacity>
      <SampleTable
        sample={stepContent.content.sample}
        measure={stepContent.content.measure}
      />
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
    resizeMode: "contain",

    // height: 400,
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
  buttonContainer: {
    display: "flex",
    width: "98%",
    alignSelf: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 3,
    padding: 5,
    marginVertical: 7,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  nextCell: {
    color: COLORS.green,
  },
  historyCell: {
    color: COLORS.logoGray,
  },
  modalContainer: {
    flex: 1,
    width: "90%",
    height: "80%",
    marginHorizontal: "5%",
    marginVertical: "10%",
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    borderStyle: "solid",
  },
  modal: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  modalInputContainer: {
    display: "flex",
    width: "100%",
  },
  modalInput: {
    width: "100%",
    fontSize: 25,
    marginVertical: 5,
  },
  modalButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
  },
  modalCancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: COLORS.red,
  },
  modalContinueButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: COLORS.green,
  },
  modalCancelButtonText: {
    fontSize: 20,
    color: "#330e0d",
  },
  modalContinueButtonText: {
    fontSize: 20,
    color: "#0b2b1e",
  },
});

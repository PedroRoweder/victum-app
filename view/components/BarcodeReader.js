import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Paragraph, Dialog, Portal } from "react-native-paper";

export default BarcodeReader = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barData, setBarData] = useState("");
  const [visible, setVisible] = useState(true);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarData(data);
  };

  if (hasPermission === null) {
    return <Text>Pedindo acesso à câmera do dispositivo</Text>;
  }
  if (hasPermission === false) {
    return <Text>Usuário não concedeu acesso à câmera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Codigo lido</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Conteudo: {barData}. O que deseja fazer?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                setScanned(false);

                hideDialog;
              }}
            >
              Ler novamente
            </Button>
            <Button
              onPress={() =>
                navigation.navigate("visualizeDetails", { barData })
              }
            >
              Prosseguir
            </Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
};

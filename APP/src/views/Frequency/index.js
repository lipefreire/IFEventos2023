import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Container, Header, HeaderTxt } from "./styles";

export default function Frequency() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    try {
      data = JSON.parse(data);
    } catch (error) {
      alert("formato inválido");
    }

    if (data.type && data.id) {
      data.type === "event" || data.type === "subevent"
        ? data.type === "event"
          ? alert("Evento nessa boba")
          : alert("Sub nessa boba")
        : null;
    } else {
      console.log("formato inválido");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 3 }}
      />
      {scanned && (
        <Button title={"Scanear novamente"} onPress={() => setScanned(false)} />
      )}

      <Header>
        <HeaderTxt>
          Aponte a câmera para o QR Code e registre sua presença!
        </HeaderTxt>
      </Header>
    </Container>
  );
}

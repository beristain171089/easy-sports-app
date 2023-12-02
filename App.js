import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// HTTP Client//
import Request from "./src/http";

const request = new Request();

export default function App() {

  useEffect(() => {

    (async () => {

      const data = {};

      const response = await request.get('/app/jugador/get', {});

      console.log(response);

    })()

  }, [])


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
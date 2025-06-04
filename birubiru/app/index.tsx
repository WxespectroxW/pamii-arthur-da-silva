import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

const TesteAmbiente = {
  apiKey: process.env.EXPO_PUBLIC_DADO_SIGILOSO,
  authDomain: process.env.EXPO_PUBLIC_BURNO_CAON,
  projectId: process.env.EXPO_PUBLIC_CARECA_EXCESSO,
  storageBucket: process.env.EXPO_PUBLIC_BIRUUUU,
  messagingSenderId: process.env.EXPO_PUBLIC_RATATEII,
  appId: process.env.EXPO_PUBLIC_COMPLICADO_MANO,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID
}

const app = initializeApp(TesteAmbiente);

export default function Index() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data : any = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
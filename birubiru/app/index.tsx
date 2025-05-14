import { Text, View } from "react-native";

const TesteAmbiente = {
  dado_sigiloso: process.env.EXPO_PUBLIC_DADO_SIGILOSO,
  burno_caon: process.env.EXPO_PUBLIC_BURNO_CAON,
  careca_excesso: process.env.EXPO_PUBLIC_CARECA_EXCESSO,
  biruuuu: process.env.EXPO_PUBLIC_BIRUUUU,
  ratateii: process.env.EXPO_PUBLIC_RATATEII,
  complicado_mano: process.env.EXPO_PUBLIC_COMPLICADO_MANO
}

export default function Index() {
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

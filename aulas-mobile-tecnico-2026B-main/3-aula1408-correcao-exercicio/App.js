import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.cabecalho}>
        <View style={styles.circulo}></View>
        <View style={styles.viewTextos}>
          <Text style={{ fontSize: 30 }}>Olá, estudante!</Text>
          <Text>Boas vindas.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    paddingTop: 60,
  },

  circulo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "gray",
  },

  cabecalho: {
    gap: 20,
    flexDirection: "row",
    marginLeft: 10,
  },

  viewTextos: {
    justifyContent: "center",
  },
});

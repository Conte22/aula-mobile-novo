import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {
  return <SafeAreaView style={styles.tela}><View style={styles.conteudo} /></SafeAreaView>;
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    flex: 1,
  },
});
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  return (
    // headerShown: false desliga o cabeçalho só nesta tela. Sem ele, não tem
    // mais nada segurando o topo — então aqui a SafeAreaView volta a cuidar
    // das quatro bordas, e é por isso que esta tela não tem edges.
    <SafeAreaView style={styles.tela}>
      <Stack.Screen options={{ headerShown: false }} />

      <Text style={styles.titulo}>Perfil</Text>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Matrícula</Text>
        <Text style={styles.detalhe}>2026-0413</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Curso</Text>
        <Text style={styles.detalhe}>Técnico em Desenvolvimento Mobile</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Turma</Text>
        <Text style={styles.detalhe}>2026B</Text>
      </View>

      <Text style={styles.aviso}>
        Esta tela está sem cabeçalho. Compare o topo com o da tela de notas:
        aqui quem afasta o texto do relógio é a SafeAreaView, não o Stack.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 12,
    marginBottom: 16,
  },

  detalhe: {
    fontSize: 15,
    color: "#374151",
  },

  aviso: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 8,
  },
});

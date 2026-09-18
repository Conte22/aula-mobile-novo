import { Stack, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Arquivo notas.js -> rota "/notas". Ninguém registrou essa rota em lugar
// nenhum: o caminho do arquivo É o endereço.
export default function Notas() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Minhas notas" }} />

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Matemática</Text>
        <Text style={styles.nota}>8,5</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Física</Text>
        <Text style={styles.nota}>7,0</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>História</Text>
        <Text style={styles.nota}>9,2</Text>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.detalhe}>
          O botão de voltar do cabeçalho já funciona. Este aqui faz a mesma
          coisa por código, para quando a volta acontece depois de salvar algo.
        </Text>
        <Button title="VOLTAR" onPress={() => router.back()} />
      </View>
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
    // Espaçamento nosso, não área segura. Como o topo não está no edges,
    // a SafeAreaView não põe nada aqui: sem estes 16 o cartão cola no
    // cabeçalho.
    paddingTop: 16,
  },

  nota: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2354D6",
  },

  rodape: {
    marginTop: "auto",
    marginBottom: 16,
    gap: 10,
  },

  detalhe: {
    fontSize: 14,
    color: "#6B7280",
  },
});

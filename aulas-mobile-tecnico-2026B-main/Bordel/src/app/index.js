import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Menu Principal" }} />

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Notas</Text>

        <Text style={styles.detalhe}>
          Exemplo de tela de notas.
        </Text>

        <Link href="/notas" style={styles.link}>
          Abrir notas →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Cadastro de Bordel</Text>

        <Text style={styles.detalhe}>
          Informar o nome e salvar no SQLite.
        </Text>

        <Link href="/bordel" style={styles.link}>
          Abrir cadastro →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Banco de Dados</Text>

        <Text style={styles.detalhe}>
          Exemplo utilizando SQLite.
        </Text>

        <Link href="/lista-db" style={styles.link}>
          Abrir banco →
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 14,
    color: "#374151",
    marginTop: 4,
  },

  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 8,
  },
});
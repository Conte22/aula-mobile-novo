import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Menu Principal" }} />

      <View style={styles.cabecalho}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>
            Aplicativo com banco SQLite
          </Text>
        </View>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Agenda de Contatos</Text>
        <Text style={styles.detalhe}>Cadastre nomes e telefones.</Text>
        <Link href="/contatos" style={styles.link}>
          Abrir agenda →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Biblioteca Pessoal</Text>
        <Text style={styles.detalhe}>Organize seus livros.</Text>
        <Link href="/biblioteca" style={styles.link}>
          Abrir biblioteca →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Lista de Compras</Text>
        <Text style={styles.detalhe}>Controle os itens comprados.</Text>
        <Link href="/compras" style={styles.link}>
          Abrir lista →
        </Link>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Avaliação de Filmes</Text>
        <Text style={styles.detalhe}>Registre filmes e suas notas.</Text>
        <Link href="/filmes" style={styles.link}>
          Abrir avaliações →
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
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#D9DDE3",
  },
  saudacao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
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
  detalhe: {
    fontSize: 14,
    color: "#374151",
  },
  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },
});
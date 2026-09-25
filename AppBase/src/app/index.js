import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {
  return (
    // Área segura da tela
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      
      {/* Título do cabeçalho */}
      <Stack.Screen options={{ title: "Início" }} />

      {/* Título principal */}
      <Text style={styles.titulo}>Sistema Acadêmico</Text>

      {/* Card de Notas */}
      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Notas</Text>

        {/* Vai para a tela notas.js */}
        <Link href="/notas" style={styles.link}>
          Abrir →
        </Link>
      </View>

      {/* Card de Perfil */}
      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Perfil</Text>

        {/* Vai para a tela perfil.js */}
        <Link href="/perfil" style={styles.link}>
          Abrir →
        </Link>
      </View>

      {/* Card de Lista */}
      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Lista</Text>

        {/* Vai para a tela lista.js */}
        <Link href="/lista" style={styles.link}>
          Abrir →
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Tela principal
  tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },

  // Título da página
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  // Caixa de conteúdo
  cartao: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },

  // Título do cartão
  cartaoTitulo: {
    fontSize: 18,
    marginBottom: 5,
  },

  // Link de navegação
  link: {
    color: "blue",
    fontWeight: "bold",
  },
});
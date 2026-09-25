import { Stack, router } from "expo-router";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Bordel() {
  const [nome, setNome] = useState("");

  function salvar() {
    console.log("Nome salvo:", nome);
    setNome("");
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Cadastro de Bordel" }} />

      <View style={styles.cartao}>
        <Text style={styles.titulo}>
          Nome do Bordel
        </Text>

        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome"
          style={styles.campo}
        />

        <Button
          title="Salvar"
          onPress={salvar}
        />
      </View>

      <View style={styles.rodape}>
        <Button
          title="VOLTAR"
          onPress={() => router.back()}
        />
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
  },

  titulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  campo: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },

  rodape: {
    marginTop: "auto",
    marginBottom: 16,
  },
});
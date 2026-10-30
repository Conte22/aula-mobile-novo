import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

// Troque pela URL do SEU projeto no mockapi.io (copie do recurso "bordeis").
const API = "https://SEU-ID.mockapi.io/api/v1/bordeis";

export default function BordeisApi() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");

  // GET: pede a lista para a API.
  async function carregar() {
    const resposta = await fetch(API);
    const dados = await resposta.json();
    setLista(dados);
  }

  // POST: manda um bordel novo. O corpo vai como texto em JSON.
  async function salvar() {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: nome, cor: cor }),
    });
    setNome("");
    setCor("");
    // A lista da tela não sabe do bordel novo: pede de novo.
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Bordeis na nuvem" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do bordel"
      />
      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Cor do bordel"
      />
      <Button title="Salvar na API" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.id} - {item.nome} - {item.cor}
          </Text>
        )}
      />
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

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },
});

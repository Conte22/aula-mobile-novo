import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

const API_URL = "https://6ae523d428393034b08e269c.mockapi.io/produtos";

export default function Hamburgueria() {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState(0);
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  async function buscarProdutos() {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvarProduto() {
    if (idEditando === 0) {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeProduto,
          valor: valorProduto,
          descricao: descricaoProduto,
          tipo: tipoProduto,
        }),
      });
    } else {
      await fetch(API_URL + "/" + idEditando, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeProduto,
          valor: valorProduto,
          descricao: descricaoProduto,
          tipo: tipoProduto,
        }),
      });

      setIdEditando(0);
    }
    setNomeProduto("");
    setDescricaoProduto("");
    setValorProduto("");
    setTipoProduto("");

    buscarProdutos();
  }

  async function excluir(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    buscarProdutos();
  }

  async function editar(item) {
    setIdEditando(item.id);
    setNomeProduto(item.nome);
    setDescricaoProduto(item.descricao);
    setValorProduto(item.valor);
    setTipoProduto(item.tipo);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus produtos" }} />

      <TextInput
        style={styles.campo}
        value={nomeProduto}
        onChangeText={setNomeProduto}
        placeholder="Nome do produto"
      />
      <TextInput
        style={styles.campo}
        value={valorProduto}
        onChangeText={setValorProduto}
        keyboardType="numeric"
        placeholder="Valor do produto"
      />
      <TextInput
        style={styles.campo}
        value={descricaoProduto}
        onChangeText={setDescricaoProduto}
        placeholder="Descrição do produto"
      />
      <TextInput
        style={styles.campo}
        value={tipoProduto}
        onChangeText={setTipoProduto}
        placeholder="Tipo do produto"
      />

      <Button title="Salvar produto" onPress={salvarProduto} />

      <FlatList
        style={styles.lista}
        data={produtos}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>
              {item.id} - {item.nome} - {item.descricao}
            </Text>
            <Button title="Excluir" onPress={() => excluir(item.id)} />
            <Button title="Editar" onPress={() => editar(item)} />
          </View>
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

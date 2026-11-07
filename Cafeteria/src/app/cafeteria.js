
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const API_URL = "https://6aee5ed6a677fe0fc14fe378.mockapi.io/Produtos";

export default function Cafeteria() {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");
  const [tamanhoProduto, setTamanhoProduto] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  async function buscarProdutos() {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvarProduto() {
    const dadosProduto = {
      nome: nomeProduto,
      valor: Number(valorProduto),
      descricao: descricaoProduto,
      tipo: tipoProduto,
      tamanho: tamanhoProduto,
    };

    if (idEditando === 0) {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosProduto),
      });
    } else {
      await fetch(API_URL + "/" + idEditando, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosProduto),
      });

      setIdEditando(0);
    }

    setNomeProduto("");
    setDescricaoProduto("");
    setValorProduto("");
    setTipoProduto("");
    setTamanhoProduto("");

    buscarProdutos();
  }

  async function excluir(id) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    buscarProdutos();
  }

  function editar(item) {
    setIdEditando(item.id);
    setNomeProduto(item.nome);
    setDescricaoProduto(item.descricao);
    setValorProduto(String(item.valor));
    setTipoProduto(item.tipo);
    setTamanhoProduto(item.tamanho || "");
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Cafeteria" }} />

      <Text style={styles.titulo}>Cadastro de produtos</Text>

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

      <TextInput
        style={styles.campo}
        value={tamanhoProduto}
        onChangeText={setTamanhoProduto}
        placeholder="Tamanho (Pequeno, Médio ou Grande)"
      />

      <Button
        title={idEditando === 0 ? "Salvar produto" : "Atualizar produto"}
        onPress={salvarProduto}
      />

      <FlatList
        style={styles.lista}
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>
              {item.id} - {item.nome}
              {"\n"}Valor: R$ {item.valor}
              {"\n"}Descrição: {item.descricao}
              {"\n"}Tipo: {item.tipo}
              {"\n"}Tamanho: {item.tamanho}
            </Text>

            <View style={styles.botoes}>
              <TouchableOpacity onPress={() => editar(item)}>
                <Text style={styles.botao}>✍️</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => excluir(item.id)}>
                <Text style={styles.botao}>🗑️</Text>
              </TouchableOpacity>
            </View>
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

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
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

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  item: {
    flex: 1,
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: "#111827",
  },

  botoes: {
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 12,
  },

  botao: {
    fontSize: 24,
  },
});

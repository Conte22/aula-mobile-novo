import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const API = "https://6ae523d428393034b08e269c.mockapi.io/produtos";

export default function Hamburgueria() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  async function buscar() {
    const resposta = await fetch(API);
    const dados = await resposta.json();
    setProdutos(dados);
  }

  async function salvar() {
    const produto = {
      nome: nome,
      valor: valor,
      descricao: descricao,
      tipo: tipo,
    };

    if (idEditando === 0) {
      // novo produto: POST
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
    } else {
      // produto que já existe: PUT, com o id na URL
      await fetch(API + "/" + idEditando, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });
    }

    setNome("");
    setValor("");
    setDescricao("");
    setTipo("");
    setIdEditando(0);
    buscar();
  }

  async function excluir(id) {
    await fetch(API + "/" + id, { method: "DELETE" });
    buscar();
  }

  function editar(item) {
    setIdEditando(item.id);
    setNome(item.nome);
    setValor(String(item.valor));
    setDescricao(item.descricao);
    setTipo(item.tipo);
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Meus produtos" }} />

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.campo}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.campo}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descrição"
      />
      <TextInput
        style={styles.campo}
        value={tipo}
        onChangeText={setTipo}
        placeholder="Tipo"
      />

      <Button title="Salvar" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={produtos}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>
              {item.id} - {item.nome} - {item.descricao}
            </Text>
            <Button title="Editar" onPress={() => editar(item)} />
            <Button title="Excluir" onPress={() => excluir(item.id)} />
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


import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Button } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("trabalho.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    telefone TEXT NOT NULL
  );
`);

export default function Contatos() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [lista, setLista] = useState([]);
  const [idEditando, setIdEditando] = useState(0);

  function carregar() {
    const dados = db.getAllSync(
      "SELECT * FROM contatos ORDER BY id DESC"
    );

    setLista(dados);
  }

  function salvar() {
    if (nome.trim() === "" || telefone.trim() === "") {
      Alert.alert("Aviso", "Preencha todos os campos.");
      return;
    }

    if (idEditando === 0) {
      db.runSync(
        "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
        [nome, telefone]
      );
    } else {
      db.runSync(
        "UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?",
        [nome, telefone, idEditando]
      );
    }

    setNome("");
    setTelefone("");
    setIdEditando(0);
    carregar();
  }

  function editar(item) {
    setNome(item.nome);
    setTelefone(item.telefone);
    setIdEditando(item.id);
  }

  function excluir(id) {
    Alert.alert("Excluir", "Deseja excluir este contato?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          db.runSync("DELETE FROM contatos WHERE id = ?", [id]);
          carregar();

          if (id === idEditando) {
            setNome("");
            setTelefone("");
            setIdEditando(0);
          }
        },
      },
    ]);
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Text style={styles.titulo}>Agenda de Contatos</Text>

      <Text>Nome:</Text>
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
      />

      <Text>Telefone:</Text>
      <TextInput
        style={styles.campo}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
      />

      <Button
        title={idEditando === 0 ? "Salvar" : "Atualizar"}
        onPress={salvar}
      />

      {idEditando !== 0 && (
        <Button
          title="Cancelar edição"
          onPress={() => {
            setNome("");
            setTelefone("");
            setIdEditando(0);
          }}
        />
      )}

      <Text style={styles.subtitulo}>Contatos cadastrados</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<Text>Nenhum contato cadastrado.</Text>}
        renderItem={({ item }) => (
          <View style={styles.contato}>
            <Text>Nome: {item.nome}</Text>
            <Text>Telefone: {item.telefone}</Text>

            <Button
              title="Editar"
              onPress={() => editar(item)}
            />

            <Button
              title="Excluir"
              color="red"
              onPress={() => excluir(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  campo: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  contato: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    gap: 5,
  },
});
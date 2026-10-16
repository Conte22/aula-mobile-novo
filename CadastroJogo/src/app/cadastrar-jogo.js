
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
  CREATE TABLE IF NOT EXISTS jogos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    plataforma TEXT NOT NULL,
    horas TEXT NOT NULL
  );
`);

export default function Jogos() {
  const [nome, setNome] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [horas, setHoras] = useState("");
  const [lista, setLista] = useState([]);
  const [idEditando, setIdEditando] = useState(0);

  function carregar() {
    const dados = db.getAllSync(
      "SELECT * FROM jogos ORDER BY id DESC"
    );

    setLista(dados);
  }

  function salvar() {
    if (nome.trim() === "" || plataforma.trim() === "" || horas.trim() === "") {
      Alert.alert("Aviso", "Preencha todos os campos.");
      return;
    }

    if (idEditando === 0) {
      db.runSync(
        "INSERT INTO jogos (nome, plataforma, horas) VALUES (?, ?, ?)",
        [nome, plataforma, horas]
      );
    } else {
      db.runSync(
        "UPDATE jogos SET nome = ?, plataforma = ?, horas = ? WHERE id = ?",
        [nome, plataforma, horas, idEditando]
      );
    }

    setNome("");
    setPlataforma("");
    setHoras("");
    setIdEditando(0);
    carregar();
  }

  function editar(item) {
    setNome(item.nome);
    setPlataforma(item.plataforma);
    setHoras(item.horas);
    setIdEditando(item.id);
  }

  function excluir(id) {
    Alert.alert("Excluir", "Deseja excluir este jogo?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          db.runSync("DELETE FROM jogos  WHERE id = ?", [id]);
          carregar();

          if (id === idEditando) {
            setNome("");
            setPlataforma("");
            setHoras("");
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
      <Text style={styles.titulo}>Cadastrar Jogos</Text>

      <Text>Nome do Jogo:</Text>
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do jogo"
      />

      <Text>Plataforma:</Text>
      <TextInput
        style={styles.campo}
        value={plataforma}
        onChangeText={setPlataforma}
        placeholder="Digite a plataforma"
      />

      <Text>Horas Jogadas:</Text>
      <TextInput
        style={styles.campo}
        value={horas}
        onChangeText={setHoras}
        placeholder="Digite as horas jogadas"
        keyboardType="numeric"
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
            setPlataforma("");
            setHoras("");
            setIdEditando(0);
          }}
        />
      )}

      <Text style={styles.subtitulo}>Jogos cadastrados</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<Text>Nenhum jogo cadastrado.</Text>}
        renderItem={({ item }) => (
          <View style={styles.contato}>
            <Text>Nome: {item.nome}</Text>
            <Text>Plataforma: {item.plataforma}</Text>
            <Text>Horas Jogadas: {item.horas}</Text>

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
    fontSize: 30,
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
    fontSize: 25,
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
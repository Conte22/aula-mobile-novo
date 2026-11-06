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

const db = SQLite.openDatabaseSync("tarefas.db");

//db.execSync(`DROP TABLE tarefas`);

db.execSync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      texto VARCHAR(255) NOT NULL,
      prioridade VARCHAR(255) NOT NULL
    )
  `);

function listar() {
  return db.getAllSync("SELECT * FROM tarefas ORDER BY id DESC");
}

function salvar(textoASerSalvo, prioridadeASerSalva) {
  db.runSync("INSERT INTO tarefas (texto, prioridade) VALUES (?, ?)", [
    textoASerSalvo,
    prioridadeASerSalva,
  ]);
}

function atualizar(codigo, novoTexto, novaPrioridade) {
  db.runSync("UPDATE tarefas SET texto = ?, prioridade = ? WHERE id = ?", [
    novoTexto,
    novaPrioridade,
    codigo,
  ]);
}

function excluir(codigo) {
  db.runSync("DELETE FROM tarefas WHERE id = ?", [codigo]);
}

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [idSelecionado, setIdSelecionado] = useState(null);

  function carregar() {
    setLista(listar());
  }

  function guardar() {
    salvar(texto, prioridade);
    setTexto("");
    setPrioridade("");
    carregar();
  }

  function alterar() {
    if (idSelecionado) {
      atualizar(idSelecionado, texto, prioridade);
      setIdSelecionado(null);
      setTexto("");
      setPrioridade("");
      carregar();
    }
  }

  function editar(item) {
    setIdSelecionado(item.id);
    setTexto(item.texto);
    setPrioridade(item.prioridade);
  }

  function remover(codigo) {
    if (idSelecionado === codigo) {
      setIdSelecionado(null);
      setTexto("");
      setPrioridade("");
    }
    excluir(codigo);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Minhas tarefas" }} />

      <TextInput
        style={styles.campo}
        value={texto}
        onChangeText={setTexto}
        placeholder="Nova tarefa"
      />
      <TextInput
        style={styles.campo}
        value={prioridade}
        onChangeText={setPrioridade}
        placeholder="Prioridade"
      />
      <Button title="Adicionar" onPress={guardar} />
      <Button title="Atualizar" onPress={alterar} />

      <FlatList
        style={styles.lista}
        data={lista}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>
              {item.texto} - {item.prioridade}
            </Text>
            <Button
              title="Editar"
              onPress={() => {
                editar(item);
              }}
            />
            <Button
              title="Excluir"
              onPress={() => {
                remover(item.id);
              }}
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

import { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("trabalho.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS filmes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    nota REAL
  );
`);

export default function Filmes() {
  const [titulo, setTitulo] = useState("");
  const [nota, setNota] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(db.getAllSync("SELECT * FROM filmes"));
  }

  function salvar() {
    const valor = Number(nota);

    if (titulo === "" || nota === "" || valor < 0 || valor > 10) return;

    db.runSync(
      "INSERT INTO filmes (titulo, nota) VALUES (?, ?)",
      [titulo, valor]
    );

    setTitulo("");
    setNota("");
    carregar();
  }

  function excluir(id) {
    db.runSync("DELETE FROM filmes WHERE id = ?", [id]);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Título do filme</Text>
      <TextInput value={titulo} onChangeText={setTitulo} style={{ borderWidth: 1 }} />

      <Text>Nota de 0 a 10</Text>
      <TextInput value={nota} onChangeText={setNota} keyboardType="decimal-pad" style={{ borderWidth: 1 }} />

      <Button title="Salvar" onPress={salvar} />

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>Nota: {Number(item.nota).toFixed(1)}</Text>
            <Button title="Excluir" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
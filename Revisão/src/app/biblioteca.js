import { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("trabalho.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    autor TEXT,
    paginas INTEGER
  );
`);

export default function Biblioteca() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [paginas, setPaginas] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(db.getAllSync("SELECT * FROM livros"));
  }

  function salvar() {
    if (titulo === "" || autor === "" || paginas === "") return;

    db.runSync(
      "INSERT INTO livros (titulo, autor, paginas) VALUES (?, ?, ?)",
      [titulo, autor, Number(paginas)]
    );

    setTitulo("");
    setAutor("");
    setPaginas("");
    carregar();
  }

  function excluir(id) {
    db.runSync("DELETE FROM livros WHERE id = ?", [id]);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Título</Text>
      <TextInput value={titulo} onChangeText={setTitulo} style={{ borderWidth: 1 }} />

      <Text>Autor</Text>
      <TextInput value={autor} onChangeText={setAutor} style={{ borderWidth: 1 }} />

      <Text>Páginas</Text>
      <TextInput value={paginas} onChangeText={setPaginas} keyboardType="numeric" style={{ borderWidth: 1 }} />

      <Button title="Salvar" onPress={salvar} />

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.autor}</Text>
            <Text>{item.paginas} páginas</Text>
            <Button title="Excluir" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
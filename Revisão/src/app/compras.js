import { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("trabalho.db");

db.execSync(`
  CREATE TABLE IF NOT EXISTS compras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item TEXT,
    quantidade INTEGER,
    comprado INTEGER DEFAULT 0
  );
`);

export default function Compras() {
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(db.getAllSync("SELECT * FROM compras"));
  }

  function salvar() {
    if (item === "" || quantidade === "") return;

    db.runSync(
      "INSERT INTO compras (item, quantidade) VALUES (?, ?)",
      [item, Number(quantidade)]
    );

    setItem("");
    setQuantidade("");
    carregar();
  }

  function marcar(compra) {
    const valor = compra.comprado === 1 ? 0 : 1;

    db.runSync(
      "UPDATE compras SET comprado = ? WHERE id = ?",
      [valor, compra.id]
    );

    carregar();
  }

  function excluir(id) {
    db.runSync("DELETE FROM compras WHERE id = ?", [id]);
    carregar();
  }

  function limpar() {
    db.runSync("DELETE FROM compras WHERE comprado = 1");
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Item</Text>
      <TextInput value={item} onChangeText={setItem} style={{ borderWidth: 1 }} />

      <Text>Quantidade</Text>
      <TextInput value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" style={{ borderWidth: 1 }} />

      <Button title="Salvar" onPress={salvar} />
      <Button title="Limpar comprados" onPress={limpar} />

      <FlatList
        data={lista}
        keyExtractor={(compra) => String(compra.id)}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.comprado === 1 ? "✓ " : ""}
              {item.item} - {item.quantidade}
            </Text>
            <Button title="Marcar comprado" onPress={() => marcar(item)} />
            <Button title="Excluir" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
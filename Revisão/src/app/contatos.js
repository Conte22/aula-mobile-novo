import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../banco";

export default function Contatos() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  function carregar() {
    setLista(db.getAllSync(
      "SELECT * FROM contatos ORDER BY id DESC"
    ));
  }

  function salvar() {
    if (!nome.trim() || !telefone.trim()) {
      Alert.alert("Atenção", "Preencha nome e telefone.");
      return;
    }

    if (idEditando === 0) {
      db.runSync(
        "INSERT INTO contatos (nome, telefone) VALUES (?, ?)",
        [nome.trim(), telefone.trim()]
      );
    } else {
      db.runSync(
        "UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?",
        [nome.trim(), telefone.trim(), idEditando]
      );
    }

    limpar();
    carregar();
  }

  function limpar() {
    setNome("");
    setTelefone("");
    setIdEditando(0);
  }

  function editar(item) {
    setIdEditando(item.id);
    setNome(item.nome);
    setTelefone(item.telefone);
  }

  function excluir(id) {
    db.runSync("DELETE FROM contatos WHERE id = ?", [id]);

    if (id === idEditando) {
      limpar();
    }

    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Text style={styles.titulo}>
        {idEditando === 0 ? "Novo contato" : "Editar contato"}
      </Text>

      <TextInput
        style={styles.campo}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.campo}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />

      <Button
        title={idEditando === 0 ? "Salvar contato" : "Atualizar contato"}
        onPress={salvar}
      />

      {idEditando !== 0 && (
        <Button title="Cancelar edição" onPress={limpar} />
      )}

      <Text style={styles.subtitulo}>
        Contatos cadastrados: {lista.length}
      </Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<Text>Nenhum contato cadastrado.</Text>}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.item}>Nome: {item.nome}</Text>
            <Text style={styles.item}>Telefone: {item.telefone}</Text>
            <View style={styles.botao}>
              <Button title="Editar" onPress={() => editar(item)} />
            </View>
            <View style={styles.botao}>
              <Button
                title="Excluir"
                color="#C62828"
                onPress={() =>
                  Alert.alert("Excluir", "Deseja excluir este contato?", [
                    { text: "Cancelar", style: "cancel" },
                    {
                      text: "Excluir",
                      style: "destructive",
                      onPress: () => excluir(item.id),
                    },
                  ])
                }
              />
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
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
  },
  cartao: {
    backgroundColor: "#F1F3F6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  item: {
    fontSize: 16,
    marginBottom: 6,
  },
  botao: {
    marginTop: 6,
  },
});
```javascript
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";

// Abre ou cria o banco de dados no aparelho
const db = SQLite.openDatabaseSync("bordeis.db");

// Cria a tabela se ela ainda não existir
db.execSync(`
  CREATE TABLE IF NOT EXISTS bordeis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    cor VARCHAR(255) NOT NULL
  )
`);

// Busca todos os registros
function listar() {
  return db.getAllSync(
    "SELECT * FROM bordeis ORDER BY id DESC"
  );
}

// Salva um novo registro
function salvar(nome, cor) {
  db.runSync(
    "INSERT INTO bordeis (nome, cor) VALUES (?, ?)",
    [nome, cor]
  );
}

// Exclui um registro
function excluir(id) {
  db.runSync(
    "DELETE FROM bordeis WHERE id = ?",
    [id]
  );
}

// Atualiza um registro existente
function edita(nome, cor, id) {
  db.runSync(
    "UPDATE bordeis SET nome = ?, cor = ? WHERE id = ?",
    [nome, cor, id]
  );
}

export default function Lista() {
  const [lista, setLista] = useState([]);
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [idEditando, setIdEditando] = useState(0);

  // Atualiza a lista exibida na tela
  function carregar() {
    setLista(listar());
  }

  // Salva um registro novo ou atualiza o selecionado
  function guardarOuEditar() {
    if (nome.trim() === "" || cor.trim() === "") {
      Alert.alert(
        "Atenção",
        "Preencha o nome e a cor."
      );
      return;
    }

    if (idEditando === 0) {
      salvar(nome.trim(), cor.trim());
      Alert.alert("Sucesso", "Registro cadastrado!");
    } else {
      edita(nome.trim(), cor.trim(), idEditando);
      Alert.alert("Sucesso", "Registro atualizado!");
    }

    setNome("");
    setCor("");
    setIdEditando(0);

    carregar();
  }

  // Limpa os campos e cancela a edição
  function cancelarEdicao() {
    setNome("");
    setCor("");
    setIdEditando(0);
  }

  // Exclui o registro selecionado
  function remover(id) {
    Alert.alert(
      "Confirmar exclusão",
      "Deseja realmente excluir este registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            excluir(id);

            if (idEditando === id) {
              cancelarEdicao();
            }

            carregar();
          },
        },
      ]
    );
  }

  // Coloca os dados do registro nos campos
  function editar(item) {
    setIdEditando(item.id);
    setNome(item.nome);
    setCor(item.cor);
  }

  // Carrega os registros quando a tela abre
  useEffect(() => {
    carregar();
  }, []);

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen
        options={{ title: "Meus bordeis" }}
      />

      <Text style={styles.titulo}>
        {idEditando === 0
          ? "Cadastrar registro"
          : "Editar registro"}
      </Text>

      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do bordel"
      />

      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Cor do bordel"
      />

      <Button
        title={idEditando === 0 ? "Salvar" : "Atualizar"}
        onPress={guardarOuEditar}
      />

      {idEditando !== 0 && (
        <View style={styles.botaoCancelar}>
          <Button
            title="Cancelar edição"
            onPress={cancelarEdicao}
            color="#666666"
          />
        </View>
      )}

      <Text style={styles.subtitulo}>
        Registros cadastrados: {lista.length}
      </Text>

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum registro cadastrado.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.item}>
              ID: {item.id}
            </Text>

            <Text style={styles.item}>
              Nome: {item.nome}
            </Text>

            <Text style={styles.item}>
              Cor: {item.cor}
            </Text>

            <View style={styles.botao}>
              <Button
                title="Editar"
                onPress={() => editar(item)}
              />
            </View>

            <View style={styles.botao}>
              <Button
                title="Excluir"
                color="#C62828"
                onPress={() => remover(item.id)}
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#111111",
  },

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#111111",
    marginBottom: 12,
  },

  botaoCancelar: {
    marginTop: 8,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  lista: {
    flex: 1,
    marginTop: 8,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  item: {
    fontSize: 16,
    color: "#111111",
    marginBottom: 6,
  },

  botao: {
    marginTop: 6,
  },

  vazio: {
    textAlign: "center",
    marginTop: 20,
    color: "#666666",
    fontSize: 16,
  },
});
```

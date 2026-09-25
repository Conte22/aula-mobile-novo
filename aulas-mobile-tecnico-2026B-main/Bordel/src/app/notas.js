import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// useState é o primeiro hook. Uma variável comum (let nota = 8.5) não avisa
// o React quando muda; o hook avisa, e o React desenha a tela de novo.
export default function Notas() {
  // useState devolve duas coisas: o valor atual e a função que troca o valor.
  // Os colchetes só dão nome a cada uma. O 8.5 é o valor inicial.
  const [nota, setNota] = useState(8.5);
  const [mostrar, setMostrar] = useState(false);

  // useEffect é o segundo hook: roda DEPOIS que a tela foi desenhada.
  // A lista [nota] diz quando rodar de novo: só quando nota mudar.
  // Aperte o botão e olhe o terminal.
  useEffect(() => {
    console.log("nota mudou para", nota);
  }, [nota]);

  // Funções que os botões chamam. setNota guarda o novo valor E manda o
  // React desenhar a tela de novo. Só trocar a variável não faria nada.
  function aumentarNota() {
    setNota(nota + 0.5);
  }

  function alternarDetalhes() {
    setMostrar(!mostrar);
  }

  // O texto do botão depende do estado. Ternário: condição ? seVerdadeiro : seFalso
  const tituloBotao = mostrar ? "Esconder detalhes" : "Mostrar detalhes";

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Minhas notas" }} />

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Matemática</Text>
        <Text style={styles.nota}>{nota}</Text>
        {/* Passa a função SEM parênteses: quem chama é o botão, na hora do
            toque. Com parênteses ela rodaria agora, ao desenhar. */}
        <Button title="Aumentar nota" onPress={aumentarNota} />
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Física</Text>
        <Text style={styles.nota}>7</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>História</Text>
        <Text style={styles.nota}>9.2</Text>
      </View>

      <Button title={tituloBotao} onPress={alternarDetalhes} />

      {/* Mostrar ou não um pedaço da tela: ternário de novo. null = nada. */}
      {mostrar ? (
        <Text style={styles.detalhe}>
          Regra de ouro: estado é o que muda com o tempo e aparece na tela.
        </Text>
      ) : null}

      <View style={styles.rodape}>
        <Button title="VOLTAR" onPress={() => router.back()} />
      </View>
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

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 8,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  nota: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2354D6",
  },

  detalhe: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 10,
    lineHeight: 20,
  },

  rodape: {
    marginTop: "auto",
    marginBottom: 16,
  },
});

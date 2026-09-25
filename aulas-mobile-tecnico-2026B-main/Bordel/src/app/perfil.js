import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  // O texto digitado é estado: muda com o tempo e aparece na tela.
  const [nome, setNome] = useState("Cavalo");

  // Lista vazia []: o efeito roda uma vez, quando a tela abre.
  // A função devolvida no return é a limpeza: o React chama quando a tela
  // fecha. Abra o perfil, volte para a home e olhe o terminal.
  useEffect(() => {
    console.log("perfil abriu");

    return () => {
      console.log("perfil fechou");
    };
  }, []);

  return (
    // headerShown: false desliga o cabeçalho só nesta tela. Sem ele, não tem
    // mais nada segurando o topo — então aqui a SafeAreaView volta a cuidar
    // das quatro bordas, e é por isso que esta tela não tem edges.
    <SafeAreaView style={styles.tela}>
      <Stack.Screen options={{ headerShown: false, title: "Perfil" }} />

      <Text style={styles.titulo}>Perfil</Text>

      <Text style={styles.rotulo}>Seu nome</Text>
      {/* value mostra o estado; onChangeText escreve no estado. As duas
          pontas ligadas = campo "controlado".
          onChangeText chama a cada tecla passando o texto inteiro, e setNome
          já aceita o texto — então passamos setNome direto, sem função no
          meio. Só vale criar uma função quando há conta a fazer antes de
          guardar (veja aumentarNota em notas.js). */}
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      {/* Lê o MESMO estado. A cada tecla a tela é desenhada de novo e a
          saudação acompanha. Ternário: enquanto o campo está vazio, mostra
          "Estudante". */}
      <Text style={styles.saudacao}>Olá, {nome}</Text>

      <Text style={styles.aviso}>
        Este nome vive só nesta tela: volte para a home e o cabeçalho continua
        "Estudante". Cada tela tem o próprio estado.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 12,
    marginBottom: 16,
  },

  rotulo: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
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

  saudacao: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },

  aviso: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 12,
    lineHeight: 19,
  },
});

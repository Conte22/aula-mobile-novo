import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, Button, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Carinha() {
  const [carinha, setCarinha] = useState("🥸");

  return (
    <SafeAreaView style={styles.tela}>
      <Stack.Screen options={{ headerShown: false, title: "Perfil" }} />
      <Button
        title="Triste"
        onPress={() => {
          setCarinha("😭");
        }}
      />
      <Text>{carinha}</Text>
      <Button
        title="Feliz"
        onPress={() => {
          setCarinha("😀");
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setCarinha("🥸");
        }}
      />
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

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Menu Principal" }}
      />
      <Stack.Screen
        name="contatos"
        options={{ title: "Agenda de Contatos" }}
      />
      <Stack.Screen
        name="biblioteca"
        options={{ title: "Biblioteca Pessoal" }}
      />
      <Stack.Screen
        name="compras"
        options={{ title: "Lista de Compras" }}
      />
      <Stack.Screen
        name="filmes"
        options={{ title: "Avaliação de Filmes" }}
      />
    </Stack>
  );
}
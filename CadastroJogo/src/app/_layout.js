import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="cadastrar-jogo"
        options={{ title: "Cadastrar Jogo" }}
      />
    </Stack>
  );
}
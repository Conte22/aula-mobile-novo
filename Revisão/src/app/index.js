import { View, Button } from "react-native";
import { useRouter, Stack } from "expo-router";

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, gap: 10 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <Button
        title="Contatos"
        onPress={() => router.push("/contatos")}
      />

      <Button
        title="Biblioteca"
        onPress={() => router.push("/biblioteca")}
      />

      <Button
        title="Compras"
        onPress={() => router.push("/compras")}
      />

      <Button
        title="Filmes"
        onPress={() => router.push("/filmes")}
      />
    </View>
  );
}
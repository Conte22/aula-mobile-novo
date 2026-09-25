import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Notas() {
  return (
    <View>
      <Stack.Screen options={{ title: "Notas" }} />
      <Text>Tela de Notas</Text>
    </View>
  );
}
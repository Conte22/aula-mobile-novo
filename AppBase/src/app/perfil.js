import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Perfil() {
  return (
    <View>
      <Stack.Screen options={{ title: "Perfil" }} />
      <Text>Tela de Perfil</Text>
    </View>
  );
}
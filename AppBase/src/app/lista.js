import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Lista() {
  return (
    <View>
      <Stack.Screen options={{ title: "Lista" }} />
      <Text>Tela de Lista</Text>
    </View>
  );
}
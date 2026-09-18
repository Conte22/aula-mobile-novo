import { StatusBar } from 'expo-status-bar';
import { Pressable ,Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Boa Noite !</Text>
      <Button
      title="Clique se quiser"
      color="#00570c"
      accessibilityLabel="Clique se quiser"
      />
      <Pressable onPress={() => alert('Pressionado!')}>
        <Text>Clique</Text>
      </Pressable>
      <TextInput placeholder="Escreva Algo" />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

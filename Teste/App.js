import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Exemplo 1: Alinhamento lado a lado e Elemento Circular */}
      <View style={styles.linhaLadoALado}>
        <View style={styles.avatarCircular} />
        <View>
          <Text style={styles.nome}>João Silva</Text>
          <Text style={styles.subtitulo}>Desenvolvedor React Native</Text>
        </View>
      </View>

      {/* Exemplo 2: Múltiplos Estilos via Array [...] */}
      <View style={[styles.cartaoBase, styles.cartaoAtivo]}>
        <Text style={styles.textoCartao}>
          Cartão Ativo (combina o estilo base com fundo verde)
        </Text>
      </View>

      {/* Exemplo 3 e 4: Botão Interativo com Estilo Inline Dinâmico */}
      <Pressable 
        style={[styles.botaoBase, { backgroundColor: '#ff0000' }]}
        onPress={() => alert('Item excluído com sucesso!')}
      >
        <Text style={styles.textoBotao}>EXCLUIR CONTA</Text>
      </Pressable>

      {/* Exemplo 5: Botão Fixo no Rodapé */}
      <Pressable 
        style={styles.botaoFixoRodape}
        onPress={() => alert('Alterações salvas!')}
      >
        <Text style={styles.textoBotao}>SALVAR ALTERAÇÕES</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Container principal ocupando toda a tela (flex: 1)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },

  // Alinhamento em linha (flexDirection: 'row')
  linhaLadoALado: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 25,
  },

  // Círculo perfeito (borderRadius é a metade da largura/altura)
  avatarCircular: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 14,
    color: '#666',
  },

  // Estilo Base de Cartão
  cartaoBase: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 20,
  },

  // Modificador ativado via Array de estilos
  cartaoAtivo: {
    backgroundColor: '#d3f9d8',
    borderWidth: 1,
    borderColor: '#2b8a3e',
  },

  textoCartao: {
    color: '#2b8a3e',
    fontWeight: 'bold',
  },

  // Botão Padrão
  botaoBase: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Posição Absoluta para fixar no rodapé
  botaoFixoRodape: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#28a745',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
});
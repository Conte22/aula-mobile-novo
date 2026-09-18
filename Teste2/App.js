import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* 1. CABEÇALHO DO PERFIL */}
      <View style={styles.cabecalho}>
        <View style={styles.fotoPerfil}>
          <Text style={styles.textoFoto}>JS</Text>
        </View>
        <View style={styles.infoUsuario}>
          <Text style={styles.nome}>João Silva</Text>
          <View style={styles.badge}>
            <Text style={styles.textoBadge}>PRO</Text>
          </View>
        </View>
      </View>

      {/* 2. BARRA DE STATUS / RESUMO (Cards Lado a Lado) */}
      <View style={styles.resumoContainer}>
        <View style={styles.cardResumo}>
          <Text style={styles.numeroResumo}>12</Text>
          <Text style={styles.labelResumo}>Concluídas</Text>
        </View>
        <View style={styles.cardResumo}>
          <Text style={styles.numeroResumo}>3</Text>
          <Text style={styles.labelResumo}>Pendentes</Text>
        </View>
      </View>

      <Text style={styles.tituloSecao}>Tarefas de Hoje</Text>

      {/* 3. LISTA ROLÁVEL DE TAREFAS */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.lista}>
        
        {/* Tarefa Pendente */}
        <View style={styles.itemTarefa}>
          <View style={styles.indicadorPendente} />
          <View style={styles.detalhesTarefa}>
            <Text style={styles.tituloTarefa}>Estudar Flexbox no React Native</Text>
            <Text style={styles.horarioTarefa}>09:00 AM</Text>
          </View>
        </View>

        {/* Tarefa Concluída (Combinação de estilos com Array [...]) */}
        <View style={[styles.itemTarefa, styles.itemConcluido]}>
          <View style={styles.indicadorConcluido} />
          <View style={styles.detalhesTarefa}>
            <Text style={[styles.tituloTarefa, styles.textoRiscado]}>
              Revisar comandos do Expo
            </Text>
            <Text style={styles.horarioTarefa}>08:00 AM</Text>
          </View>
        </View>

        {/* Outras tarefas... */}
        <View style={styles.itemTarefa}>
          <View style={styles.indicadorPendente} />
          <View style={styles.detalhesTarefa}>
            <Text style={styles.tituloTarefa}>Montar exemplos práticos de código</Text>
            <Text style={styles.horarioTarefa}>14:30 PM</Text>
          </View>
        </View>

      </ScrollView>

      {/* 4. BOTÃO FLUTUANTE FIXO NO RODAPÉ */}
      <Pressable 
        style={styles.botaoFlutuante}
        onPress={() => alert('Nova tarefa criada!')}
      >
        <Text style={styles.textoBotaoFlutuante}>+ NOVA TAREFA</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingTop: 50,
  },

  // Cabeçalho
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25, // Transforma o quadrado em círculo
    backgroundColor: '#4c6ef5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoFoto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  badge: {
    backgroundColor: '#ffe066',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  textoBadge: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#f59f00',
  },

  // Resumo (Lado a Lado)
  resumoContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },
  cardResumo: {
    flex: 1, // Faz ambos os cards ocuparem o mesmo tamanho proporcional
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  numeroResumo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4c6ef5',
  },
  labelResumo: {
    fontSize: 12,
    color: '#868e96',
    marginTop: 2,
  },

  // Lista
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 12,
  },
  lista: {
    flex: 1,
  },
  itemTarefa: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f1f3f5',
  },
  itemConcluido: {
    backgroundColor: '#f1f3f5',
    opacity: 0.7,
  },
  indicadorPendente: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff922b', // Laranja
  },
  indicadorConcluido: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#51cf66', // Verde
  },
  detalhesTarefa: {
    flex: 1,
  },
  tituloTarefa: {
    fontSize: 14,
    color: '#212529',
    fontWeight: '500',
  },
  textoRiscado: {
    textDecorationLine: 'line-through',
    color: '#adb5bd',
  },
  horarioTarefa: {
    fontSize: 11,
    color: '#adb5bd',
    marginTop: 2,
  },

  // Botão Fixo
  botaoFlutuante: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#4c6ef5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 4, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textoBotaoFlutuante: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
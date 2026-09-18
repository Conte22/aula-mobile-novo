import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topo}>
        <Text style={styles.cidade}>Encantado, RS</Text>
        <Text style={styles.data}>Sexta-Feira 28/08</Text>
      </View>

      <View style={styles.temperatura}>
        <Text style={styles.graus}>18°</Text>
        <Text style={styles.condicao}>Parcialmente nublado</Text>

        <View style={styles.minMax}>
          <Text style={styles.temp}>Máx 21°</Text>
          <Text style={styles.temp}>Mín 9°</Text>
        </View>
      </View>

      <Text style={styles.titulo}>Próximos dias</Text>

      <View style={styles.dias}>

        <View style={styles.dia}>
          <Text style={styles.nomeDia}>Qua</Text>
          <Text style={styles.nuvem}>■</Text>
          <Text style={styles.tempDia}>22°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.nomeDia}>Qui</Text>
          <Text style={styles.nuvem}>■</Text>
          <Text style={styles.tempDia}>19°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.nomeDia}>Sex</Text>
          <Text style={styles.nuvem}>■</Text>
          <Text style={styles.tempDia}>17°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.nomeDia}>Sáb</Text>
          <Text style={styles.nuvem}>■</Text>
          <Text style={styles.tempDia}>21°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.nomeDia}>Dom</Text>
          <Text style={styles.nuvem}>■</Text>
          <Text style={styles.tempDia}>25°</Text>
        </View>

      </View>

      <View style={styles.alerta}>
        <Text style={styles.alertaTitulo}>Alerta</Text>
        <Text style={styles.alertaTexto}>
          Possibilidade de chuva forte.
        </Text>
      </View>

      <Pressable
        style={styles.botao}
        onPress={() => alert('Abrindo semana completa!')}
      >
        <Text style={styles.textoBotao}>
          VER PROXIMOS 7 DIAS
        </Text>
      </Pressable>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },

  cidade: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  data: {
    fontSize: 20,
    color: '#666',
  },

  temperatura: {
    backgroundColor: '#dbfcfe',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c6dbf5',
  },

  graus: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#0855f0',
  },

  condicao: {
    color: '#0055ff',
    marginBottom: 12,
  },

  minMax: {
    flexDirection: 'row',
    gap: 25,
  },

  temp: {
    color: '#0055ff',
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  dias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dia: {
    backgroundColor: '#f1f3f5',
    width: 60,
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },

  nomeDia: {
    fontSize: 15,
    color: '#3d3d3d',
  },

  nuvem: {
    color: '#76bfff',
    fontSize: 20,
  },

  tempDia: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  alerta: {
    backgroundColor: '#fff6ce',
    borderColor: '#ff0000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },

  alertaTitulo: {
    color: '#463f03',
    fontWeight: 'bold',
    marginBottom: 3,
  },

  alertaTexto: {
    color: '#f00808',
    fontSize: 12,
  },

  botao: {
    backgroundColor: '#282bd9',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '90%',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
  },

});
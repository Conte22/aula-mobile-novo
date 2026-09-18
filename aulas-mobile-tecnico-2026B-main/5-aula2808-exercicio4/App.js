import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      {/* Cabeçalho: cidade na esquerda, data na direita */}
      <View style={styles.cabecalho}>
        <Text style={styles.cidade}>Lajeado, RS</Text>
        <Text style={styles.data}>Ter 28/08</Text>
      </View>

      {/* Agora: tudo centralizado, inclusive a linha de máx e mín */}
      <View style={styles.cartaoAgora}>
        <Text style={styles.temperatura}>18°</Text>
        <Text style={styles.condicao}>Parcialmente nublado</Text>
        <View style={styles.linhaMaxMin}>
          <Text style={styles.maxMin}>Máx 24°</Text>
          <Text style={styles.maxMin}>Mín 13°</Text>
        </View>
      </View>

      {/* Próximos dias: cinco colunas de larguras iguais */}
      <Text style={styles.tituloSecao}>Próximos dias</Text>
      <View style={styles.linhaDias}>
        <View style={styles.dia}>
          <Text style={styles.diaNome}>Qua</Text>
          <View style={styles.icone}></View>
          <Text style={styles.diaTemp}>22°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.diaNome}>Qui</Text>
          <View style={styles.icone}></View>
          <Text style={styles.diaTemp}>19°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.diaNome}>Sex</Text>
          <View style={styles.icone}></View>
          <Text style={styles.diaTemp}>17°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.diaNome}>Sáb</Text>
          <View style={styles.icone}></View>
          <Text style={styles.diaTemp}>21°</Text>
        </View>

        <View style={styles.dia}>
          <Text style={styles.diaNome}>Dom</Text>
          <View style={styles.icone}></View>
          <Text style={styles.diaTemp}>25°</Text>
        </View>
      </View>

      {/* Alerta */}
      <View style={styles.cartaoAlerta}>
        <Text style={styles.alertaTitulo}>Alerta</Text>
        <Text style={styles.alertaTexto}>
          Possibilidade de chuva forte após as 18h.
        </Text>
      </View>

      <View style={styles.rodape}>
        <Button title="VER SEMANA COMPLETA" color="#2354D6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cidade: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },

  data: {
    fontSize: 15,
    color: "#6B7280",
  },

  cartaoAgora: {
    backgroundColor: "#DCEAFB",
    borderWidth: 1,
    borderColor: "#A9CBEF",
    borderRadius: 16,
    padding: 24,
    marginTop: 20,
    alignItems: "center",
  },

  temperatura: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  condicao: {
    fontSize: 16,
    color: "#1E40AF",
    marginTop: 4,
  },

  // uma linha dentro de uma coluna que já está centralizada
  linhaMaxMin: {
    flexDirection: "row",
    gap: 20,
    marginTop: 16,
  },

  maxMin: {
    fontSize: 15,
    color: "#1E40AF",
  },

  tituloSecao: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 26,
    marginBottom: 10,
  },

  linhaDias: {
    flexDirection: "row",
    gap: 8,
  },

  // flex: 1 resolve a largura, alignItems resolve o alinhamento de dentro
  dia: {
    flex: 1,
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    gap: 8,
  },

  diaNome: {
    fontSize: 14,
    color: "#6B7280",
  },

  icone: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#93C5FD",
  },

  diaTemp: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },

  cartaoAlerta: {
    backgroundColor: "#FEF3C7",
    borderWidth: 1,
    borderColor: "#FCD34D",
    borderRadius: 12,
    padding: 16,
    marginTop: 26,
  },

  alertaTitulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#92400E",
    marginBottom: 4,
  },

  alertaTexto: {
    fontSize: 15,
    color: "#92400E",
  },

  // flex: 1 aqui empurra o botão para o fim da tela, com justifyContent
  rodape: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

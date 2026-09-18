import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      {/* Cabeçalho: círculo na esquerda, dois textos na direita */}
      <View style={styles.cabecalho}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>Bem-vindo ao seu painel</Text>
        </View>
      </View>

      {/* Menu: três botões dividindo a largura em partes iguais */}
      <Text style={styles.tituloSecao}>Menu</Text>
      <View style={styles.linhaDeBotoes}>
        <View style={styles.espacoDoBotao}>
          <Button title="NOTAS" color="#2354D6" />
        </View>
        <View style={styles.espacoDoBotao}>
          <Button title="AULAS" color="#1B9E4B" />
        </View>
        <View style={styles.espacoDoBotao}>
          <Button title="AVISOS" color="#8B2FC9" />
        </View>
      </View>

      {/* Próximas atividades: três cartões, o do meio em destaque */}
      <Text style={styles.tituloSecao}>Próximas atividades</Text>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Trabalho de Matemática</Text>
        <Text style={styles.cartaoDetalhe}>Entrega: 20/08</Text>
      </View>

      <View style={[styles.cartao, styles.cartaoDestaque]}>
        <Text style={styles.cartaoTitulo}>Prova de Física (Importante)</Text>
        <Text style={styles.cartaoDetalhe}>Data: 22/08</Text>
      </View>

      <View style={styles.cartao}>
        <Text style={styles.cartaoTitulo}>Leitura de História</Text>
        <Text style={styles.cartaoDetalhe}>Cap. 3 e 4</Text>
      </View>

      {/* Chamada para ação: cartão só com borda, conteúdo centralizado */}
      <Text style={styles.tituloSecao}>Chamada para ação</Text>
      <View style={styles.cartaoChamada}>
        <Text style={styles.textoChamada}>
          Adquira um novo curso e continue aprendendo!
        </Text>
        <Button title="COMPRAR CURSO" color="#7B1FA2" />
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
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#D9DDE3",
  },

  saudacao: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 2,
  },

  tituloSecao: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginTop: 26,
    marginBottom: 10,
  },

  linhaDeBotoes: {
    flexDirection: "row",
    gap: 8,
  },

  // flex: 1 nas três Views faz cada botão ficar com um terço da linha
  espacoDoBotao: {
    flex: 1,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },

  // usado junto com "cartao": só troca a cor e acrescenta a borda
  cartaoDestaque: {
    backgroundColor: "#DCEAFB",
    borderWidth: 1,
    borderColor: "#A9CBEF",
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },

  cartaoDetalhe: {
    fontSize: 14,
    color: "#6B7280",
  },

  cartaoChamada: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    gap: 16,
  },

  textoChamada: {
    fontSize: 15,
    color: "#374151",
    textAlign: "center",
  },
});

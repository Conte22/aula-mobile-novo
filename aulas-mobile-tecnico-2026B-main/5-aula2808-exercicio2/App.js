import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      {/* Cabeçalho: círculo colorido na esquerda, dois textos na direita */}
      <View style={styles.cabecalho}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>Sua trilha do dia</Text>
        </View>
      </View>

      {/* Menu: três botões dividindo a largura em partes iguais */}
      <Text style={styles.tituloSecao}>Menu</Text>
      <View style={styles.linhaDeBotoes}>
        <View style={styles.espacoDoBotao}>
          <Button title="PLAYLISTS" color="#1B9E4B" />
        </View>
        <View style={styles.espacoDoBotao}>
          <Button title="ARTISTAS" color="#2354D6" />
        </View>
        <View style={styles.espacoDoBotao}>
          <Button title="RÁDIO" color="#C2410C" />
        </View>
      </View>

      {/* Tocadas recentemente: a lista rola, o resto da tela fica parado */}
      <Text style={styles.tituloSecao}>Tocadas recentemente</Text>
      <ScrollView style={styles.lista} contentContainerStyle={styles.listaConteudo}>
        <View style={[styles.cartao, styles.cartaoDestaque]}>
          <View>
            <Text style={styles.musica}>Thunderstruck</Text>
            <Text style={styles.artista}>AC/DC · tocando agora</Text>
          </View>
          <Text style={styles.duracao}>4:52</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Chop Suey!</Text>
            <Text style={styles.artista}>System of a Down</Text>
          </View>
          <Text style={styles.duracao}>3:30</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Back in Black</Text>
            <Text style={styles.artista}>AC/DC</Text>
          </View>
          <Text style={styles.duracao}>4:15</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Toxicity</Text>
            <Text style={styles.artista}>System of a Down</Text>
          </View>
          <Text style={styles.duracao}>3:39</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Highway to Hell</Text>
            <Text style={styles.artista}>AC/DC</Text>
          </View>
          <Text style={styles.duracao}>3:28</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Aerials</Text>
            <Text style={styles.artista}>System of a Down</Text>
          </View>
          <Text style={styles.duracao}>3:55</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>T.N.T.</Text>
            <Text style={styles.artista}>AC/DC</Text>
          </View>
          <Text style={styles.duracao}>3:35</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>B.Y.O.B.</Text>
            <Text style={styles.artista}>System of a Down</Text>
          </View>
          <Text style={styles.duracao}>4:15</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Enter Sandman</Text>
            <Text style={styles.artista}>Metallica</Text>
          </View>
          <Text style={styles.duracao}>5:32</Text>
        </View>

        <View style={styles.cartao}>
          <View>
            <Text style={styles.musica}>Paranoid</Text>
            <Text style={styles.artista}>Black Sabbath</Text>
          </View>
          <Text style={styles.duracao}>2:48</Text>
        </View>
      </ScrollView>

      {/* Chamada para ação: fica fixa embaixo, a lista rola por cima */}
      <View style={styles.cartaoChamada}>
        <Text style={styles.textoChamada}>
          Assine o Premium e ouça sem anúncios!
        </Text>
        <Button title="ASSINAR AGORA" color="#1B9E4B" />
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
    alignItems: "center",
    gap: 14,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#C4B5FD",
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

  // flex: 1 aqui é o que faz a lista rolar: ela fica com a altura que sobrou
  // na tela, entre o título e a chamada para ação
  lista: {
    flex: 1,
  },

  // espaçamento do CONTEÚDO que rola. No ScrollView, padding e gap vão aqui,
  // não no style
  listaConteudo: {
    gap: 10,
    paddingBottom: 4,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // usado junto com "cartao": só troca a cor e acrescenta a borda
  cartaoDestaque: {
    backgroundColor: "#DCF3E4",
    borderWidth: 1,
    borderColor: "#A8DDBB",
  },

  musica: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },

  artista: {
    fontSize: 14,
    color: "#6B7280",
  },

  duracao: {
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
    marginTop: 16,
  },

  textoChamada: {
    fontSize: 15,
    color: "#374151",
    textAlign: "center",
  },
});

import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.usuarioInfo}>
          <View style={styles.fotoPerfil} />
          <View>
            <Text style={styles.nomeUsuario}>Olá, Estudante</Text>
            <Text style={styles.subtitulo}>Sua musica do dia</Text>
          </View>
        </View>
        <View style={styles.iconeEngrenagem}>
          <Text style={
            { color: '#fff', fontWeight: 'bold' }
            }>⚙</Text>
        </View>
      </View>

      <Text style={styles.tituloSecao}>Menu</Text>
      <View style={styles.menu}>
        <Pressable style={
          [styles.botaoMenu, { backgroundColor: '#00a84e' }]
          }>
          <Text style={styles.textoBotaoMenu}>PLAYLISTS</Text>
        </Pressable>
        <Pressable style={
          [styles.botaoMenu, { backgroundColor: '#0d6efd' }]
          }>
          <Text style={styles.textoBotaoMenu}>ARTISTAS</Text>
        </Pressable>
        <Pressable style={
          [styles.botaoMenu, { backgroundColor: '#d93808' }]
          }>
          <Text style={styles.textoBotaoMenu}>RÁDIO</Text>
        </Pressable>
      </View>

      <Text style={styles.tituloSecao}>Tocadas recentemente</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={
          [styles.cartaoMusica, styles.cartaoTocando]

        }>
          <View>
            <Text style={styles.nomeMusica}>Música 1</Text>
            <Text style={styles.artista}>Artista 1 · <Text style={{ color: '#2b8a3e' }}>tocando agora</Text></Text>
          </View>
          <Text style={styles.duracao}>4:52</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 2</Text>
            <Text style={styles.artista}>Artista 2</Text>
          </View>
          <Text style={styles.duracao}>3:30</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 3</Text>
            <Text style={styles.artista}>Artista 3</Text>
          </View>
          <Text style={styles.duracao}>4:10</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 4</Text>
            <Text style={styles.artista}>Artista 4</Text>
          </View>
          <Text style={styles.duracao}>3:09</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 5</Text>
            <Text style={styles.artista}>Artista 5</Text>
          </View>
          <Text style={styles.duracao}>3:20</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 6</Text>
            <Text style={styles.artista}>Artista 6</Text>
          </View>
          <Text style={styles.duracao}>3:50</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 7</Text>
            <Text style={styles.artista}>Artista 7</Text>
          </View>
          <Text style={styles.duracao}>4:00</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 8</Text>
            <Text style={styles.artista}>Artista 8</Text>
          </View>
          <Text style={styles.duracao}>3:30</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 9</Text>
            <Text style={styles.artista}>Artista 9</Text>
          </View>
          <Text style={styles.duracao}>3:37</Text>
        </View>

        <View style={styles.cartaoMusica}>
          <View>
            <Text style={styles.nomeMusica}>Música 10</Text>
            <Text style={styles.artista}>Artista 10</Text>
          </View>
          <Text style={styles.duracao}>3:34</Text>
        </View>

        <View style={styles.cardPremium}>
          <Text style={styles.textoPremium}>Assine aqui o Premium para ouvir sem anúncios!</Text>
          <Pressable 
            style={styles.botaoPremium}
            onPress={() => alert('Plano Premium selecionado!')}
          >
            <Text style={styles.textoBotaoPremium}>ASSINAR AGORA</Text>
          </Pressable>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 45,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  usuarioInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fotoPerfil: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#c4b5fd',
  },
  nomeUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 14,
    color: '#888',
  },
  iconeEngrenagem: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloSecao: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 8,
  },
  botaoMenu: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBotaoMenu: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  scroll: {
    flex: 1,
  },
  cartaoMusica: {
    backgroundColor: '#f1f3f5',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartaoTocando: {
    backgroundColor: '#d3f9d8',
  },
  nomeMusica: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  artista: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  duracao: {
    fontSize: 13,
    color: '#888',
  },
  cardPremium: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  textoPremium: {
    fontSize: 13,
    color: '#495057',
    marginBottom: 12,
  },
  botaoPremium: {
    backgroundColor: '#00a84e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoBotaoPremium: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
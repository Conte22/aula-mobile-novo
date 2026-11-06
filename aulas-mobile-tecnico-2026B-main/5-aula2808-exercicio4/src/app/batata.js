import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

export default function App() {
  return (
    <View style={styles.tela}>
      {/* Cabeçalho */}
      <Text style={styles.titulo}>Seu carrinho</Text>
      <Text style={styles.subtitulo}>9 produtos</Text>

      {/* A lista de itens é a única parte que rola */}
      <ScrollView style={styles.lista} contentContainerStyle={styles.listaConteudo}>
        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Teclado mecânico</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 320,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Mouse sem fio</Text>
            <Text style={styles.itemQtd}>Qtd: 2</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 90,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Headset gamer</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 249,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Mousepad grande</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 79,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Webcam Full HD</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 189,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Cabo HDMI 2m</Text>
            <Text style={styles.itemQtd}>Qtd: 3</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 39,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Suporte para notebook</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 129,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Hub USB-C</Text>
            <Text style={styles.itemQtd}>Qtd: 1</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 99,00</Text>
        </View>

        <View style={styles.item}>
          <View style={styles.miniatura}></View>
          <View style={styles.itemTextos}>
            <Text style={styles.itemNome}>Filtro de linha</Text>
            <Text style={styles.itemQtd}>Qtd: 2</Text>
          </View>
          <Text style={styles.itemPreco}>R$ 58,00</Text>
        </View>
      </ScrollView>

      {/* Resumo: três linhas de rótulo à esquerda e valor à direita */}
      <View style={styles.resumo}>
        <View style={styles.linhaResumo}>
          <Text style={styles.rotulo}>Subtotal</Text>
          <Text style={styles.valor}>R$ 1.252,00</Text>
        </View>

        <View style={styles.linhaResumo}>
          <Text style={styles.rotulo}>Frete</Text>
          <Text style={styles.valor}>R$ 24,90</Text>
        </View>

        <View style={[styles.linhaResumo, styles.linhaTotal]}>
          <Text style={styles.rotuloTotal}>Total</Text>
          <Text style={styles.valorTotal}>R$ 1.276,90</Text>
        </View>
      </View>

      <Button title="FINALIZAR COMPRA" color="#1B9E4B" />
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

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 2,
  },

  lista: {
    flex: 1,
    marginTop: 22,
  },

  listaConteudo: {
    gap: 10,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  miniatura: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#CBD2DB",
  },

  // flex: 1 empurra o preço para a direita e ainda deixa o nome quebrar linha
  itemTextos: {
    flex: 1,
  },

  itemNome: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },

  itemQtd: {
    fontSize: 14,
    color: "#6B7280",
  },

  itemPreco: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111827",
  },

  resumo: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },

  linhaResumo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },

  // usado junto com "linhaResumo": só acrescenta o traço em cima
  linhaTotal: {
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginTop: 6,
    paddingTop: 12,
  },

  rotulo: {
    fontSize: 15,
    color: "#6B7280",
  },

  valor: {
    fontSize: 15,
    color: "#111827",
  },

  rotuloTotal: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
  },

  valorTotal: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#111827",
  },
});

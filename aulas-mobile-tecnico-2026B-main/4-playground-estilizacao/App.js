// ============================================================================
// PLAYGROUND DE ESTILIZAÇÃO — React Native
//
// ATENÇÃO: você NÃO precisa entender o código deste arquivo.
// Ele é só a ferramenta. A matéria é o que aparece na TELA:
//   1. toque nos botões
//   2. olhe o que acontece com as caixas azuis
//   3. leia o código que aparece embaixo
//
// A cor do botão é a mesma cor da propriedade no código. Use isso.
// ============================================================================

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";

// As opções que o aluno pode escolher em cada propriedade.
const OPCOES_DIRECTION = ["column", "row"];
const OPCOES_JUSTIFY = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
];
const OPCOES_ALIGN = ["stretch", "flex-start", "center", "flex-end"];
const OPCOES_GAP = [0, 10, 24];
const OPCOES_QUANTIDADE = [2, 3, 4];

const COR_DIRECTION = "#C792EA";
const COR_JUSTIFY = "#FFB84D";
const COR_ALIGN = "#4DE1C1";
const COR_GAP = "#FF7B92";

const debug = { borderWidth: 2, borderColor: "red" };

export default function App() {
  const [flexDirection, setFlexDirection] = useState("column");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [gap, setGap] = useState(0);
  const [quantidade, setQuantidade] = useState(3);
  const [esticarSegunda, setEsticarSegunda] = useState(false);
  const [raioX, setRaioX] = useState(false);

  const ehLinha = flexDirection === "row";
  const setaPrincipal = ehLinha ? "→" : "↓";
  const setaCruzado = ehLinha ? "↓" : "→";
  const nomePrincipal = ehLinha ? "horizontal" : "vertical";
  const nomeCruzado = ehLinha ? "vertical" : "horizontal";

  const caixas = [];
  for (let i = 1; i <= quantidade; i++) caixas.push(i);

  return (
    <View style={styles.tela}>
      <Text style={[styles.titulo, debug]}>Playground de Estilização</Text>

      {/* A bússola: qual propriedade age em qual direção, AGORA. */}
      <View style={styles.bussola}>
        <Text style={styles.bussolaLinha}>
          <Text style={{ color: COR_JUSTIFY }}>
            J = justifyContent {setaPrincipal}
          </Text>
          <Text style={styles.bussolaTexto}> empurra na {nomePrincipal}</Text>
        </Text>
        <Text style={styles.bussolaLinha}>
          <Text style={{ color: COR_ALIGN }}>A = alignItems {setaCruzado}</Text>
          <Text style={styles.bussolaTexto}> empurra na {nomeCruzado}</Text>
        </Text>
      </View>

      {/* O PALCO com os dois trilhos desenhados nas margens, do mesmo jeito
          que você desenha no papel. O laranja segue o flexDirection; o verde cruza. */}
      <View style={styles.palcoComTrilhos}>
        <TrilhoVertical
          cor={ehLinha ? COR_ALIGN : COR_JUSTIFY}
          letra={ehLinha ? "A" : "J"}
        />

        <View style={styles.colunaPalco}>
          <View
            style={[
              styles.palco,
              { flexDirection, justifyContent, alignItems, gap },
              raioX && styles.raioXPalco,
            ]}
          >
            {caixas.map((numero) => (
              <View
                key={numero}
                style={[
                  styles.caixa,
                  esticarSegunda && numero === 2 && styles.caixaEsticada,
                  raioX && styles.raioXCaixa,
                ]}
              >
                <Text style={styles.caixaTexto}>{numero}</Text>
              </View>
            ))}
          </View>

          <TrilhoHorizontal
            cor={ehLinha ? COR_JUSTIFY : COR_ALIGN}
            letra={ehLinha ? "J" : "A"}
          />
        </View>
      </View>

      <ScrollView
        style={styles.rolagem}
        contentContainerStyle={styles.rolagemConteudo}
      >
        <Controle
          nome="flexDirection"
          cor={COR_DIRECTION}
          opcoes={OPCOES_DIRECTION}
          valor={flexDirection}
          aoEscolher={setFlexDirection}
        />
        <Controle
          nome="justifyContent"
          cor={COR_JUSTIFY}
          opcoes={OPCOES_JUSTIFY}
          valor={justifyContent}
          aoEscolher={setJustifyContent}
        />
        <Controle
          nome="alignItems"
          cor={COR_ALIGN}
          opcoes={OPCOES_ALIGN}
          valor={alignItems}
          aoEscolher={setAlignItems}
        />
        <Controle
          nome="gap"
          cor={COR_GAP}
          opcoes={OPCOES_GAP}
          valor={gap}
          aoEscolher={setGap}
        />

        <View style={styles.separador} />

        <Controle
          nome="quantas caixas"
          cor="#9A9A9A"
          opcoes={OPCOES_QUANTIDADE}
          valor={quantidade}
          aoEscolher={setQuantidade}
        />

        <View style={styles.linhaToggles}>
          <Toggle
            texto="flex: 1 na caixa 2"
            ativo={esticarSegunda}
            aoTocar={() => setEsticarSegunda(!esticarSegunda)}
          />
          <Toggle
            texto="raio-x"
            ativo={raioX}
            aoTocar={() => setRaioX(!raioX)}
          />
        </View>

        {/* O CÓDIGO — o mesmo StyleSheet que você escreveria na mão. */}
        <View style={styles.painelCodigo}>
          <Linha texto="const styles = StyleSheet.create({" />
          <Linha texto="  palco: {" />
          <LinhaProp
            nome="flexDirection"
            valor={flexDirection}
            cor={COR_DIRECTION}
          />
          <LinhaProp
            nome="justifyContent"
            valor={justifyContent}
            cor={COR_JUSTIFY}
          />
          <LinhaProp nome="alignItems" valor={alignItems} cor={COR_ALIGN} />
          <LinhaProp nome="gap" valor={gap} cor={COR_GAP} texto={false} />
          <Linha texto="  }," />
          {esticarSegunda && (
            <>
              <Linha texto="" />
              <Linha texto="  caixa2: {" />
              <LinhaProp nome="flex" valor={1} cor="#EDEDED" texto={false} />
              <Linha texto="  }," />
            </>
          )}
          <Linha texto="});" />
        </View>

        <View style={styles.desafios}>
          <Text style={styles.desafiosTitulo}>Desafios</Text>
          <Text style={styles.desafio}>
            1. Deixe as caixas empilhadas e colada no canto de baixo.
          </Text>
          <Text style={styles.desafio}>
            2. Deixe as caixas lado a lado, grudadas no meio da tela, sem gap.
          </Text>
          <Text style={styles.desafio}>
            3. Ligue "stretch" nas duas direções e explique em voz alta por que
            a caixa muda de forma quando você troca column por row.
          </Text>
          <Text style={styles.desafio}>
            4. Ligue "flex: 1 na caixa 2". Por que ela cresce e as outras não?
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Pedaços reutilizáveis da interface do playground.
// ---------------------------------------------------------------------------

function TrilhoHorizontal({ cor, letra }) {
  return (
    <View style={styles.trilhoH}>
      <Text style={[styles.trilhoLetra, { color: cor }]}>{letra}</Text>
      <View style={[styles.trilhoLinhaH, { backgroundColor: cor }]} />
      <Text style={[styles.trilhoPonta, { color: cor }]}>▶</Text>
    </View>
  );
}

function TrilhoVertical({ cor, letra }) {
  return (
    <View style={styles.trilhoV}>
      <Text style={[styles.trilhoLetra, { color: cor }]}>{letra}</Text>
      <View style={[styles.trilhoLinhaV, { backgroundColor: cor }]} />
      <Text style={[styles.trilhoPonta, { color: cor }]}>▼</Text>
    </View>
  );
}

function Controle({ nome, cor, opcoes, valor, aoEscolher }) {
  return (
    <View style={styles.controle}>
      <Text style={[styles.controleNome, { color: cor }]}>{nome}</Text>
      <View style={styles.controleOpcoes}>
        {opcoes.map((opcao) => {
          const selecionado = opcao === valor;
          return (
            <Pressable
              key={String(opcao)}
              onPress={() => aoEscolher(opcao)}
              style={[
                styles.chip,
                selecionado && { backgroundColor: cor, borderColor: cor },
              ]}
            >
              <Text
                style={[styles.chipTexto, selecionado && styles.chipTextoAtivo]}
              >
                {String(opcao)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function Toggle({ texto, ativo, aoTocar }) {
  return (
    <Pressable
      onPress={aoTocar}
      style={[styles.chip, ativo && styles.chipLigado]}
    >
      <Text style={[styles.chipTexto, ativo && styles.chipTextoAtivo]}>
        {ativo ? "✓ " : ""}
        {texto}
      </Text>
    </Pressable>
  );
}

function Linha({ texto }) {
  return <Text style={styles.codigo}>{texto || " "}</Text>;
}

function LinhaProp({ nome, valor, cor, texto = true }) {
  const valorFormatado = texto ? '"' + valor + '"' : valor;
  return (
    <Text style={styles.codigo}>
      {"    "}
      <Text style={{ color: cor }}>{nome}</Text>
      {": "}
      <Text style={styles.codigoValor}>{valorFormatado}</Text>
      {","}
    </Text>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#1B1B1F",
  },

  titulo: {
    color: "#EDEDED",
    fontSize: 22,
    fontWeight: "700",
  },

  bussola: {
    marginTop: 10,
    marginBottom: 12,
    gap: 2,
  },

  bussolaLinha: {
    fontSize: 13,
    fontWeight: "600",
  },

  bussolaTexto: {
    color: "#8A8A93",
    fontWeight: "400",
  },

  palcoComTrilhos: {
    flexDirection: "row",
  },

  colunaPalco: {
    flex: 1,
  },

  trilhoV: {
    width: 22,
    alignItems: "center",
    paddingVertical: 2,
  },

  trilhoH: {
    height: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
  },

  trilhoLinhaV: {
    width: 2,
    flex: 1,
    marginVertical: 3,
  },

  trilhoLinhaH: {
    height: 2,
    flex: 1,
    marginHorizontal: 3,
  },

  trilhoLetra: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14,
  },

  trilhoPonta: {
    fontSize: 11,
    lineHeight: 13,
  },

  palco: {
    height: 270,
    backgroundColor: "#2A2A31",
    borderRadius: 12,
    padding: 10,
    overflow: "hidden",
  },

  caixa: {
    backgroundColor: "#4A9EFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  caixaEsticada: {
    flex: 1,
  },

  caixaTexto: {
    color: "#0E2033",
    fontWeight: "700",
    fontSize: 16,
  },

  raioXPalco: {
    borderWidth: 2,
    borderColor: "#FF4D6D",
  },

  raioXCaixa: {
    borderWidth: 2,
    borderColor: "#FF4D6D",
  },

  rolagem: {
    flex: 1,
    marginTop: 14,
  },

  rolagemConteudo: {
    paddingBottom: 60,
  },

  controle: {
    marginBottom: 12,
  },

  controleNome: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },

  controleOpcoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },

  chip: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3C3C45",
    backgroundColor: "#26262D",
  },

  chipLigado: {
    backgroundColor: "#EDEDED",
    borderColor: "#EDEDED",
  },

  chipTexto: {
    color: "#B9B9C2",
    fontSize: 13,
  },

  chipTextoAtivo: {
    color: "#16161A",
    fontWeight: "700",
  },

  separador: {
    height: 1,
    backgroundColor: "#31313A",
    marginBottom: 14,
  },

  linhaToggles: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 16,
  },

  painelCodigo: {
    backgroundColor: "#121216",
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#2C2C34",
  },

  codigo: {
    color: "#7E7E8A",
    fontFamily: Platform.select({ ios: "Menlo", default: "monospace" }),
    fontSize: 13,
    lineHeight: 20,
  },

  codigoValor: {
    color: "#EDEDED",
  },

  desafios: {
    marginTop: 20,
    gap: 8,
  },

  desafiosTitulo: {
    color: "#EDEDED",
    fontSize: 16,
    fontWeight: "700",
  },

  desafio: {
    color: "#9A9AA5",
    fontSize: 13,
    lineHeight: 19,
  },
});

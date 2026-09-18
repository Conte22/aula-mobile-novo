# Aula 28/08 — Correção do exercício "Painel do Estudante"

Solução de referência do exercício de layout entregue na aula anterior: um
painel de aluno com cabeçalho, menu de botões, lista de atividades e uma
chamada para ação.

Todo o `App.js` usa apenas o que a turma já viu: `View`, `Text`, `Button`,
`StyleSheet` e flexbox (`flexDirection`, `gap`, `alignItems`,
`justifyContent`, `flex`). Nenhum `useState`, nenhum `.map()`, nenhum
componente próprio.

## Como rodar

```bash
npm install
npm start
```

Leia o QR Code com o Expo Go, ou aperte `w` para abrir no navegador.

## A leitura da tela: quatro blocos empilhados

Antes de escrever qualquer estilo, vale fazer isso no quadro. A `View` raiz é
uma coluna (padrão do React Native), e dentro dela caem quatro blocos, um
embaixo do outro:

1. **Cabeçalho** — a única linha da tela: `flexDirection: "row"`.
2. **Menu** — título + uma linha com três botões.
3. **Próximas atividades** — título + três cartões.
4. **Chamada para ação** — título + um cartão centralizado.

O resto é preenchimento. A pergunta que resolve o exercício é sempre a mesma:
*isso aqui é uma linha ou uma coluna?*

## Os quatro pontos que valem discutir

### 1. O cabeçalho é uma linha com dois filhos, não três

O erro mais comum é tratar o círculo e os dois textos como três irmãos na mesma
linha — e aí os textos ficam lado a lado. O cabeçalho tem **dois** filhos: o
círculo e uma `View` que agrupa os dois textos. Essa `View` de agrupamento não
precisa de estilo nenhum: por ser coluna por padrão, ela já empilha os textos.

O `alignItems: "center"` do cabeçalho é o que centraliza o bloco de textos na
altura do círculo.

### 2. O círculo é um quadrado com `borderRadius` metade do lado

`width: 64`, `height: 64`, `borderRadius: 32`. Vale mostrar o que acontece com
`borderRadius: 10` e com `borderRadius: 200` — acima da metade, nada muda.

### 3. `flex: 1` é o que divide a linha do menu em três partes iguais

O `Button` do React Native não aceita `style`, então não tem como colocar
`flex: 1` nele. A solução é envolver cada botão em uma `View` com `flex: 1`: as
três Views brigam pela largura, empatam, e cada botão preenche a sua.

Sem isso, cada botão fica do tamanho do próprio texto e "AVISOS" sai maior que
"NOTAS". É um bom momento para retomar que `flex: 1` reparte a **sobra**.

### 4. Dois estilos no mesmo elemento: `style={[a, b]}`

Este é o único conceito novo do arquivo. O cartão da prova de Física é igual
aos outros, só com outra cor de fundo e uma borda. Em vez de repetir as cinco
propriedades do `cartao` num estilo novo, passamos os dois:

```jsx
<View style={[styles.cartao, styles.cartaoDestaque]}>
```

Os estilos são aplicados na ordem, da esquerda para a direita: quem vem depois
vence em caso de conflito. Vale testar invertendo a ordem para ver o destaque
desaparecer.

### Bônus: o botão centralizado

No cartão de chamada para ação o `Button` não ocupa a largura toda, e ninguém
mandou ele encolher. Quem faz isso é o `alignItems: "center"` do cartão: no
eixo horizontal, o filho passa a ter o tamanho do próprio conteúdo em vez de
esticar. É o mesmo `stretch` padrão que a turma viu no playground, agora sendo
desligado.

## Detalhe de plataforma

Os títulos dos botões estão escritos em maiúsculas (`"NOTAS"`) porque o
`Button` do Android já deixa o texto em maiúsculas por conta própria — no
print do enunciado ele aparece assim. Escrevendo em maiúsculas, o resultado
fica igual no Android, no iOS e na web.

## Erros que apareceram na entrega da turma

- `flex: 1` na `View` raiz esquecido — a tela fica com a altura do conteúdo e o
  fundo branco não vai até embaixo.
- `gap` confundido com `padding`: `gap` é o espaço **entre** os filhos,
  `padding` é a margem **interna** da caixa.
- `justifyContent` usado para centralizar horizontalmente numa coluna. Numa
  coluna, `justifyContent` é vertical; horizontal é `alignItems`.
- Estilo escrito no `StyleSheet` mas nunca ligado ao elemento com `style={...}`.
- `backgroundColor` no `Text` em vez de na `View` do cartão — a cor fica
  colada no texto, não no bloco.

## Próximos exercícios

Quatro exercícios de prática, na mesma linguagem desta aula, estão em
[EXERCICIOS.md](EXERCICIOS.md).

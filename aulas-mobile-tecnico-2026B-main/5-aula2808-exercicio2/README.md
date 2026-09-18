# Exercício 2 — App de músicas

O enunciado que vai para a turma está em [TAREFA.md](TAREFA.md), junto com o
print `tela-final.png`. **Entregue só esses dois arquivos** — este projeto tem
a solução no `App.js`.

## Como rodar a solução

```bash
npm install
npm start
```

Leia o QR Code com o Expo Go, ou aperte `w` para abrir no navegador.

# Notas para a correção

A solução está no `App.js`. Estruturalmente é o mesmo painel do exercício 1 —
cabeçalho em linha, três botões com `flex: 1`, cartões, chamada para ação
centralizada. O que muda de verdade são duas coisas.

### 1. `ScrollView` precisa de uma altura para rolar

É o ponto do exercício, e o erro que a turma vai cometer. Um `ScrollView` só
rola quando é **menor que o conteúdo**. Se ele não tiver altura definida, ele
cresce junto com os cartões, empurra a chamada para ação para fora da tela e
nunca rola.

A altura não vem de um número. Vem de `flex: 1`:

```js
lista: {
  flex: 1,
}
```

Na coluna que é a tela, o cabeçalho, o menu, o título e a chamada para ação já
ocupam o que precisam. `flex: 1` no `ScrollView` diz "fique com o que sobrou" —
e é justamente esse "o que sobrou" que dá a ele um tamanho fixo o suficiente
para rolar. É o mesmo `flex: 1` dos botões do menu, agora no eixo vertical.

Duas coisas boas de demonstrar ao vivo:

- Tire o `flex: 1` da lista e mostre a chamada para ação sumindo para baixo.
- Apague seis músicas e mostre a rolagem parar de existir sozinha: sobrando
  espaço, não há o que rolar. O `ScrollView` não "liga" e "desliga", ele só
  reage ao tamanho.

### 2. Espaçamento no `ScrollView` vai em `contentContainerStyle`

Um `ScrollView` são duas caixas: a janela (que fica parada e recorta) e o
conteúdo (que desliza). Por isso ele tem duas props de estilo:

```jsx
<ScrollView style={styles.lista} contentContainerStyle={styles.listaConteudo}>
```

- `style` → a janela. É aqui que vai o `flex: 1`.
- `contentContainerStyle` → o conteúdo que rola. É aqui que vão `gap`,
  `padding` e os alinhamentos dos cartões.

Se `gap` for para o `style`, o espaçamento entre os cartões simplesmente não
aparece — e é um bug difícil de achar sozinho, porque nada dá erro. Vale
escrever errado de propósito no quadro antes de mostrar o certo.

### O cartão em linha, retomando o exercício 1

Cada cartão é `flexDirection: "row"` com `justifyContent: "space-between"`. Só
que ele tem **dois** filhos, não três: a duração de um lado e uma `View`
agrupando música e artista do outro. É exatamente o mesmo agrupamento do
cabeçalho — quem tentar colocar os três textos soltos na linha vai ver a
duração no meio.

### Erros esperados

- `ScrollView` sem `flex: 1` → a chamada para ação desaparece da tela.
- Altura da lista chumbada (`height: 400`) → funciona no celular de quem
  escreveu e quebra no do colega.
- `gap` no `style` em vez do `contentContainerStyle` → cartões colados.
- Os três textos do cartão soltos na mesma linha → duração fora de lugar.
- Cartão de destaque escrito do zero em vez de `style={[styles.cartao,
  styles.cartaoDestaque]}`.

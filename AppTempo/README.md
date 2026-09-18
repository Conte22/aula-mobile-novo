# Playground de Estilização

Ferramenta de apoio para a revisão de estilização (flexbox) em React Native.

Você toca nos botões, as caixas se mexem na hora, e o `StyleSheet`
correspondente aparece embaixo. É o inverso de um gerador de CSS: o objetivo é
associar **causa e efeito** antes de decorar nome de propriedade.

## Como rodar

```bash
npm install
npm start
```

Depois leia o QR Code com o Expo Go, ou aperte `w` para abrir no navegador.

## Como usar em aula

1. **Os trilhos primeiro.** O palco tem dois trilhos desenhados nas margens,
   marcados com **J** (`justifyContent`) e **A** (`alignItems`). Troque
   `flexDirection` entre `column` e `row` e mostre que os dois giram juntos e as
   letras trocam de lugar. Esse é o conceito da aula inteira.
2. **A cor é reforço, a letra é a regra.** A cor de cada grupo de botões é a
   mesma cor do trilho e da propriedade no código gerado. No papel os alunos não
   terão cores, então o que vale é a letra na ponta do trilho.
3. **`stretch` é o padrão.** Comece com `alignItems: stretch` selecionado e
   pergunte por que as caixas ocupam a largura toda sem ninguém pedir.
4. **`flex: 1`.** Ligue o toggle "flex: 1 na caixa 2" e pergunte por que só ela
   cresce. Resposta: ela fica com a sobra.
5. **Os desafios** no fim da tela são para fazer em duplas, em voz alta.

## Sobre o `App.js`

O código deste projeto usa `useState`, `.map()` e componentes com props —
coisas que a turma ainda não viu. Isso é intencional: o arquivo é a
**ferramenta**, não o exemplo a copiar. Deixe claro para a turma que o código a
ser aprendido é o que aparece no painel inferior da tela, não o fonte.

Se alguém quiser mexer, os pontos fáceis de editar estão no topo do arquivo:
as constantes `OPCOES_*` (quais valores aparecem nos botões) e `COR_*` (as
cores de cada propriedade).

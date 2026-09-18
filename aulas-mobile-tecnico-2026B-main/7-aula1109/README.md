# Aula 11/09 — Área segura e várias telas

Material do aluno: **https://roveda.dev/materiais/telas**. Este README é o
roteiro da aula; o que está na página não se repete aqui.

## Rodar

```bash
npm install
npm start
```

## Roteiro

**1. Área segura** (Passos 1–3 da página). Mostrar a Figura 1. Depois, ao vivo:

- Tirar o `edges` de `notas.js`: aparece uma faixa branca de 54 dp abaixo do
  cabeçalho.
- Tirar o `paddingTop: 16` de `index.js`: o avatar cola no cabeçalho. É o
  momento de separar "espaço do aparelho" de "espaço meu".

**2. Setup do Expo Router** (Passo 4). Um comando e duas linhas de config. Fazer
num projeto antigo na frente da turma, ou só mostrar o diff.

**3. Telas** (Passos 5–7).

- Criar `src/app/sobre.js` com quatro linhas e abrir `/sobre`.
- Tocar no terceiro cartão da home (`/boletim`, não existe de propósito): tela
  Unmatched Route, e o Sitemap lista as rotas reais.
- Criar um arquivo qualquer dentro de `src/app/` e ver virar rota.

## O que está errado de propósito

Os três arquivos de tela repetem os estilos de cartão. Mudar a cor hoje é
abrir três arquivos. Quando a turma reclamar, a resposta é `src/components/`
e o primeiro componente próprio — outra aula. Só nomear e seguir.

## Fora desta aula

Passar dados entre telas (`/notas/3`) precisa de `useLocalSearchParams`, que é
hook. A turma termina querendo fazer isso e sem conseguir; é a entrada da
próxima aula. Também ficaram fora abas, rotas dinâmicas e `Link asChild`.

## Medições (Pixel 9, Android 16, Expo SDK 57)

Os números da página vieram daqui. Tela com cabeçalho, `paddingTop: 16`:

| `edges` | Modo do topo | Vão abaixo do cabeçalho |
|---|---|---|
| `["bottom"]` | `off` | 43 px = 16,4 dp |
| sem `edges` | `additive` | 185 px = 70,5 dp |
| `{ top: "maximum" }` | `maximum` | 143 px = 54,5 dp |
| `["bottom"]`, sem `paddingTop` | `off` | 5 px = 1,9 dp |

`useSafeAreaInsets().top` na tela com cabeçalho: `54.09`. Sem o
`SafeAreaProvider` no layout, a `SafeAreaView` continua funcionando (o nativo
usa a própria view como referência); só o `useSafeAreaInsets()` depende dele.
Tudo medido em Android; iOS não foi medido.

# Aula 23/10 — Consumo de APIs

Cópia da aula 10. A tela nova `cep` busca o endereço na internet
(ViaCEP). Até aqui todo dado nascia no aparelho; hoje ele vem de fora.
Vocabulário da aula: **API**, **requisição**, **resposta**, **JSON** e
**`async`/`await`**.

## Rodar

```bash
npm install
npm start
```

## Roteiro

**1. O que é uma API (no navegador, sem código).** Abrir
`https://viacep.com.br/ws/95914014/json/`, que é o CEP da Univates. O
navegador faz uma pergunta (requisição) e o servidor devolve texto em JSON
(resposta). Trocar o CEP na barra de endereço. Testar `00000000`: volta
`{ "erro": "true" }`.

**2. A mesma requisição numa ferramenta.** Bruno, Postman ou Insomnia:
método `GET`, a URL, e olhar status, tempo e corpo da resposta. Testar a
API antes de escrever código.

**3. JSON é um objeto de JS.** `{ "bairro": "Universitário" }` é o mesmo
formato dos objetos que já usamos (`item.nome`, `item.cor` da lista de
bordeis). `endereco.bairro` lê o campo.

**4. A função `buscar`** (`cep.js`). `fetch` pede, `resposta.json()`
transforma em objeto, o `if` confere se veio `erro` (como o
`guardarOuEditar` da aula 10) e `setEndereco` guarda no estado; a tela
redesenha (aula 8). `await` espera a internet; só dá para usar `await`
dentro de função `async`.

**5. Por que `useState({})`.** O endereço começa como objeto vazio:
`endereco.bairro` é `undefined` e o `<Text>` não mostra nada. Sem `if` nem
`&&` no JSX: os textos ficam lá, vazios, até a resposta chegar.

**6. Quebrar de propósito.** Tirar o `await` do `fetch`: o código segue sem
a resposta e quebra. Buscar `00000000`: aparece "CEP não encontrado".
Buscar `123` ou desligar o Wi-Fi: o app quebra, porque a resposta não é
JSON ou nem chega. Tratar isso (carregando, erro, sem conexão) fica para a
aula 14.

Regra de ouro: *a API devolve o dado, o estado mostra na tela.*

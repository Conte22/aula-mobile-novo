# Aula 30/10 — GET e POST com MockAPI

Cópia da aula 13. A tela nova `bordeis-api` faz com a internet o que a
tela `bordel` (aula 10) fazia com o SQLite: lista e salva bordeis. Agora os
dados ficam num servidor e todo mundo que usa a URL vê a mesma lista.
Vocabulário da aula: **Promise**, **`async`/`await`**, **GET**, **POST**,
**corpo (body)** e **status**.

## Rodar

```bash
npm install
npm start
```

## Antes: criar a API no MockAPI

1. Entrar em <https://mockapi.io> (login com GitHub ou Google).
2. Criar um projeto. O prefixo pode ficar `/api/v1`.
3. Criar o recurso `bordeis` com os campos `nome` e `cor` (String).
   Apagar os campos de exemplo `name` e `avatar`; `id` e `createdAt` ficam.
4. Copiar a URL do recurso para a constante `API` em
   `src/app/bordeis-api.js`.
5. Abrir a URL no navegador: aparece `[]` (ou os bordeis gerados).

## Roteiro

**1. Revisão (aula 13).** O app pergunta, o servidor responde. Até aqui só
GET: buscar. Hoje também POST: mandar um dado novo.

**2. A internet demora.** `fetch` não devolve a resposta, devolve uma
**Promise** (a senha da lanchonete). `await` espera a senha ser chamada.
Só dá para usar `await` dentro de função `async`. Tirar o `await` de
propósito: `resposta.json is not a function`.

**3. GET (`carregar`).** Igual à ViaCEP, só que a resposta é uma lista:
vai direto para a `FlatList`. O `useEffect` chama ao abrir a tela.

**4. POST (`salvar`).** O `fetch` ganha um segundo parâmetro: `method`,
`headers` e `body`. O corpo vai como texto: `JSON.stringify` transforma o
objeto em texto (o contrário do `resposta.json()`). A API devolve 201 e o
bordel com `id` novo.

**5. A lista não muda sozinha.** Depois do POST, `carregar()` de novo.
Apagar essa linha e ver que o bordel só aparece ao puxar a lista.

**6. Quebrar de propósito.** Sem tratamento de erro, igual ao CEP: errar
uma letra da URL e desligar o Wi-Fi. O app quebra ou a lista não aparece;
o motivo aparece no terminal do Expo.

Regra de ouro: *GET pergunta, POST manda; nos dois, `await` espera.*

# Aula 06/11 — Editar e excluir com API

Cópia da aula 14. A tela `hamburgueria` já listava (GET) e cadastrava
(POST). Hoje ela ganha **editar** (PUT) e **excluir** (DELETE).

```bash
npm install
npm start
```

## Roteiro

1. **O id vai na URL.** Abrir `.../produtos/1` no navegador: aparece só
   o produto 1. Para mexer em um produto, a URL precisa do id dele.
2. **Excluir.** `fetch(API + "/" + id, { method: "DELETE" })` e buscar a
   lista de novo.
3. **Editar.** O botão Editar só copia o produto para os campos e guarda o
   `idEditando`. Quem manda para a API é o Salvar.
4. **Salvar faz as duas coisas.** `idEditando` é 0? POST (novo). Senão,
   PUT com o id na URL. Igual ao `bordel.js` da aula 10.

| Ação      | SQLite (aula 10) | API (hoje)          |
| --------- | ---------------- | ------------------- |
| Listar    | SELECT           | GET `/produtos`     |
| Cadastrar | INSERT           | POST `/produtos`    |
| Editar    | UPDATE           | PUT `/produtos/1`   |
| Excluir   | DELETE           | DELETE `/produtos/1`|

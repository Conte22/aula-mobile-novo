# Aula 25/09 — Inserir e consultar no SQLite

Cópia da aula 8. A tela `lista` continua só na memória. A tela `lista-db`
grava e consulta no aparelho (`expo-sqlite`).

## Rodar

```bash
npm install
npx expo install expo-sqlite
npm start
```

## Roteiro

Abrir `/lista-db`. Digitar, tocar Adicionar, fechar o app e abrir de novo: a
tarefa continua lá. `/lista` some ao fechar.

- `openDatabaseSync` abre o arquivo `tarefas.db` uma vez, fora do componente.
- `CREATE TABLE IF NOT EXISTS` cria a tabela só se ela não existir.
- `runSync` com `?` insere. O texto digitado não entra colado no SQL.
- `getAllSync` consulta. O `useEffect` com `[]` chama isso na abertura e
  guarda o resultado no estado — a tela desenha a partir do estado, como na
  aula 8.
- `keyExtractor` usa o `id` que o banco gerou.

Editar e excluir ficam para as próximas aulas.

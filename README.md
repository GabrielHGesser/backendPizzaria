# FUNCIONALIDADES

[ ] - Cadastrar um novo usuario.
[ ] - Logar um usuário.
[ ] - Verificar autenticação para rotas privadas.
[ ] - Mostrar detalhes do usuario logado.
[ ] - Criar e listar categorias
[ ] - Criar produtos e listar produtos de uma categoria específica
[ ] - Abrir uma mesa (order) e poder fechar ela.
[ ] - Adicionar itens a uma mesa e também poder retirar os itens.
[ ] - Enviar (order) retirar de rascunho
[ ] - Listar todos pedidos que não estão em rascunho (draft)
[ ] - Poder acessar todos detalhes de uma mesa com pedidos dela.
[ ] - Concluir o pedido.

# USER -------------------

id - String - UUID (PK)
name - String
email - String
password - String
created_at - DateTime
updated_at - DateTime

---

# CATEGIRY ---------------

- Uma categoria pode ter N produtos ( 1 - N )

id - String - UUID
name - String

created_at - DateTime
updated_at - DateTime

---

# PRODUCT ----------------

- Esse produto precisa pertenser a uma categoria

id - String - UUID
name - String
price - String
description - String
banner - String

category - (FK)
created_at - DateTime
updated_at - DateTime

---

# ORDERITEM -------------

id - String - UUID
amount - int

order_id (FK)
product_id (FK)

---

# ORDER ----------------

- Dentro de uma order pode ter varios Itens ORDERITEM

id - String - UUID
table - Int
status - Boolean
draft - Boolean
name? - String

---

// "dev": "ts-node-dev src/server.ts --watch"

# API Books

Este projeto é uma API para gerenciar uma lista de livros, permitindo criar, ler, atualizar e deletar livros. A aplicação utiliza Node.js, Express.js e Knex.js para a conexão com o banco de dados.

## Funcionalidades

### Livros
* **Criar Livro**: Permite a criação de novos livros. (título, autor, data de publicação, sinopse)
* **Listar Todos os Livros**: Recupera uma lista de todos os livros.
* **Listar Um Livro**: Retorna um livro específico por título ou autor.
* **Atualizar Livro**: Atualiza os dados de um livro existente.
* **Deletar Livro**: Remove um livro do sistema.

## Tecnologias Utilizadas

* **JavaScript**: Linguagem de programação utilizada para desenvolver a aplicação.
* **Node.js**: Ambiente de execução JavaScript server-side.
* **Express**: Framework web para Node.js.
* **SQLite**: Banco de dados SQL leve para armazenamento de dados.
* **Knex.js**: Query builder para SQL usado para interagir com o banco de dados.

## Estrutura do Banco de Dados

![image](https://github.com/erickromao/api_books/assets/123843702/d46b9061-47be-46de-87a2-b0efed3debfc)


* A tabela "books" foi criada para gerenciar os dados dos livros.

## Instalação

Para instalar e rodar o projeto, siga os passos abaixo:

```sh
# Clone o repositório
git clone https://github.com/erickromao/api_books.git

# Navegue até o diretório do projeto
cd api_books

# Instale as dependências
npm install

# Rode as migrações do banco de dados
npx knex migrate:latest

# Rode a aplicação
npm start

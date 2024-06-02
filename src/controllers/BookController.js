const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class BookController {

    async create(request, response) {
        const { title, author, description } = request.body

        if (!title || !author) {
            throw new AppError('Campo de (title) e (author) são obrigatórios.')
        }

        const [checkTitle] = await knex('books').where({ title })
        if (checkTitle) {
            throw new AppError(`O título (${title}) já existe!`)
        }

        await knex('books').insert({
            title,
            author,
            description
        })

        return response.status(201).json({
            message: "Livro adicionado com sucesso!",
            title,
            author,
            description
        })
    }

    async read(request, response) {
        const books = await knex('books')
        const currentBooks = books.map(({ id, ...rest }) => rest)

        if (!books) {

            return response.json({
                message: 'Não possui nenhum livro cadastrado.'
            })
        }

        return response.json({
            message: 'Todos livros em registro:',
            books: currentBooks
        })
    }

    async update(request, response) {
        const { title, new_title, author, description } = request.body

        if (!title) {
            throw new AppError('O (title) é obrigatório para atualizar um livro.')
        }

        const [book] = await knex('books').where({ title })

        if (!book) {
            throw new AppError('Livro não encontrado, escreva o título corretamente.')
        }

        const [checkNewTitle] = await knex('books')
            .where({ title: new_title })

        if (checkNewTitle && checkNewTitle.id != book.id) {
            throw new AppError('Esse título de livro já existe!')
        }

        book.title = new_title ?? book.title

        await knex('books').update({
            title: book.title,
            author,
            description,
            updated_at: knex.raw('now()')
        })
            .where({ id: book.id })

        const currentBook = [book].map(({ id, updated_at, ...rest }) => rest)

        return response.json({
            message: "Dados atualizados com sucesso!",
            new_book: currentBook
        })
    }

    async delete(request, response) {
        const { title } = request.body

        if (!title) {
            throw new AppError('O campo (title) é obrigatório.')
        }

        const [book] = await knex('books').where({ title })

        if (!book) {
            throw new AppError(`Livro não encontrado: (${title})`)
        }

        const oldBook = [book].map(({ id, ...rest }) => rest)

        await knex('books').where({ id: book.id }).delete()

        return response.json({
            message: "Livro apagado com sucesso!",
            book: oldBook
        })
    }

    async show(request, response) {
        const {title, author} = request.body
        let books
        
        if(!title && !author){
            throw new AppError('É necessário colocar pelo menos um dos campos (title) ou (author)')
        }
        
        if(title){
            const [book] = await knex('books').where({title})
            books = [book] ?? books
        }
        
        if(author){
            const book = await knex('books').where({author})
            books = books ?? [book]
        }

        if(!books){
            throw new AppError('Nenhum livro encontrado.')
        }

        const currentBooks = books.map(({id, ...rest})=>rest)

        return response.json({
            message:"Busca feita com sucesso!",
            books:currentBooks
        })
    }
}

module.exports = BookController

exports.up = knex => knex.schema.createTable("books", (table)=>{
    table.increments('id')
    table.text('title')
    table.text('author')
    table.text('description')

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable("books")
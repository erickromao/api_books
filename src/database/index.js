const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432
})

const nameDb = 'bookdb'

async function createDB() {
    try {
        const client = await pool.connect()
        const checkdb = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${nameDb}'`)
        if (checkdb.rows.length === 0) {
            await client.query(`CREATE DATABASE ${nameDb}`)
            console.log(`Banco de dados "${nameDb}" criado com sucesso`)
        } else {
            console.log(`Banco de dados "${nameDb}" já existe.`)
        }
    }catch(err){
        console.log(`Houve um erro na criação do banco ${nameDb} :`, err)
    }finally{
        pool.end()
    }

}

module.exports = createDB
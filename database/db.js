const {createPool} = require('mysql');

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
    connectionLimit:15,
});

module.exports = { db }
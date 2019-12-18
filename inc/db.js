const mysql = require('mysql');
/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'transporteturismo',
    password: '#Operadoryale10',
    multipleStatements: true
});*/

const connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bd1ff8bae59d76',
    database: 'heroku_1c8766dfa797dfd',
    password: '43995d992c84f31',
    multipleStatements: true
});


module.exports = connection;
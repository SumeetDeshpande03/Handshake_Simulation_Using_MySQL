const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: '',
    database: 'handshake_application_db',
    user: 'root',
    password: 'Pass@123'
});


try {
    console.log('Trying to establish database connection...');
    dbConnection.connect();
    console.log('Connection Established!')
} catch (error) {
    console.log('Connection could not be established:' + error);
}

module.exports = dbConnection;
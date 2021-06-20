const {createPool} = require('mysql');

//for local testing
// const pool = createPool({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.MYSQL_DB,
//     connectTimeout: 10
// });
//for hosting
const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "rentochcom_abeni",
    password: "y]~eHw@E*b$%",
    database: "rentochcom_users",
    connectTimeout: 10
});

module.exports = pool;
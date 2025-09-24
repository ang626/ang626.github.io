const { Client } = require('pg');

// MariaDB 연결
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, // 본인 DB 비밀번호
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log("✅ PostgreSQL Connected!"))
  .catch(err => console.error("❌ Connection error", err.stack));

module.exports = client;
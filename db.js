const { Client } = require('pg');

const client = new Client({
    host: dpg-d39tkk7fte5s73arqnn0-a,
    port: 5432,
    user: schedule_db_2owc_user,
    password: ezR5BBU6F5Rwl5H9FZVDwqo8nBHzLuW8,
    database: schedule_db_2owc,
    ssl: { rejectUnauthorized: false } // Render 배포용
});

client.connect()
  .then(() => console.log("✅ PostgreSQL Connected!"))
  .catch(err => console.error("❌ Connection error", err.stack));

module.exports = client;

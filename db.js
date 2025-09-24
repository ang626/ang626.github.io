const mysql = require('mysql2');

// MariaDB 연결
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', // 본인 DB 비밀번호
    database: 'schedule_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MariaDB 연결 성공!');

    // 테이블 생성
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS schedules (
            id INT PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            memo TEXT,
            date DATE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `;
    db.query(createTableQuery, (err) => {
        if (err) throw err;
        console.log('schedules 테이블 생성 완료 또는 이미 존재함');
    });
});

module.exports = db;

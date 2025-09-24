const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'index.html'));
});

// 전체 일정 조회
app.get('/api/schedules', (req, res) => {
    db.query('SELECT * FROM schedules ORDER BY date ASC', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// 일정 등록
app.post('/api/schedules', (req, res) => {
    const { title, memo, date } = req.body;
    db.query(
        'INSERT INTO schedules (title, memo, date) VALUES (?, ?, ?)',
        [title, memo, date],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ id: result.insertId, title, memo, date });
        }
    );
});

// 수정 페이지 렌더링
app.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'edit.html'));
});


// 수정 API
app.put('/api/schedules/:id', (req, res) => {
    const { id } = req.params;
    const { title, memo, date } = req.body;
    db.query(
        'UPDATE schedules SET title=?, memo=?, date=? WHERE id=?',
        [title, memo, date, id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.json({ id, title, memo, date });
        }
    );
});

// 일정 삭제
app.delete('/api/schedules/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM schedules WHERE id=?', [id], err => {
        if (err) return res.status(500).send(err);
        res.json({ message: '삭제 완료', id });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

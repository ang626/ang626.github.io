const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 메인 페이지
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'index.html'));
});

// 전체 일정 조회
app.get('/api/schedules', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM schedules ORDER BY date ASC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 일정 등록
app.post('/api/schedules', async (req, res) => {
    const { title, memo, date } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO schedules (title, memo, date) VALUES ($1, $2, $3) RETURNING id',
            [title, memo, date]
        );
        res.json({ id: result.rows[0].id, title, memo, date });
    } catch (err) {
        res.status(500).send(err);
    }
});

// 수정 페이지 렌더링
app.get('/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'template', 'edit.html'));
});

// 수정 API
app.put('/api/schedules/:id', async (req, res) => {
    const { id } = req.params;
    const { title, memo, date } = req.body;
    try {
        await db.query(
            'UPDATE schedules SET title=$1, memo=$2, date=$3 WHERE id=$4',
            [title, memo, date, id]
        );
        res.json({ id, title, memo, date });
    } catch (err) {
        res.status(500).send(err);
    }
});

// 일정 삭제
app.delete('/api/schedules/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM schedules WHERE id=$1', [id]);
        res.json({ message: '삭제 완료', id });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

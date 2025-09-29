async function loadSchedules() {
    const res = await fetch('/api/schedules');
    const schedules = await res.json();

    const list = document.getElementById('scheduleList');
    list.innerHTML = '';

    schedules.forEach(s => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${s.date} - ${s.title} (${s.memo})</span>`;

        const editBtn = document.createElement('button');
        editBtn.textContent = '수정';
        editBtn.onclick = () => editSchedule(s);

        const delBtn = document.createElement('button');
        delBtn.textContent = '삭제';
        delBtn.onclick = () => deleteSchedule(s.id);

        li.appendChild(editBtn);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}


document.getElementById('scheduleForm').addEventListener('submit', async e => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const memo = document.getElementById('memo').value;
    const date = document.getElementById('date').value;

    await fetch('/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, memo, date })
    });

    document.getElementById('scheduleForm').reset();
    loadSchedules();
});

async function deleteSchedule(id) {
    await fetch(`/api/schedules/${id}`, { method: 'DELETE' });
    loadSchedules();
}

function editSchedule(schedule) {
    window.location.href = `/edit/${schedule.id}`;
}

loadSchedules();

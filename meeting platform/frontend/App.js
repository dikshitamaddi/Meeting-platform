import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [meetings, setMeetings] = useState([]);
  const [form, setForm] = useState({ email: '', title: '', date: '', status: 'Scheduled' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/meetings')
      .then(res => setMeetings(res.data));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/meetings', form)
      .then(res => setMeetings([...meetings, res.data]));
  };

  return (
    <div>
      <h2>Meeting Platform</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <input type="datetime-local" onChange={e => setForm({ ...form, date: e.target.value })} />
        <button type="submit">Create Meeting</button>
      </form>

      <h3>Meeting History</h3>
      <ul>
        {meetings.map(m => (
          <li key={m._id}>{m.email} - {m.title} - {new Date(m.date).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

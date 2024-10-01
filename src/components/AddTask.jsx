import { useState } from 'react';

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, dueDate, time });
    setTitle('');
    setDueDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
        placeholder="Task title"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
      />
      <button type="submit" className="w-full py-2 !bg-green-400 shadow-md hover:scale-[100.5%] duration-300 text-white rounded">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;

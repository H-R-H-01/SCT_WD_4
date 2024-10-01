import { useState, useEffect } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [section, setSection] = useState('incomplete');

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const toggleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on the selected section
  const filteredTasks = tasks.filter((task) =>
    section === 'incomplete' ? !task.completed : task.completed
  );

  return (
    <div>
      <AddTask onAdd={addTask} />
      <div className="text-center mb-6 mt-4">
        <button
          className={`mr-4 px-4 py-2 rounded ${section === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSection('incomplete')}
        >
          Incomplete
        </button>
        <button
          className={`px-4 py-2 rounded ${section === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSection('completed')}
        >
          Completed
        </button>
      </div>
      <TaskList tasks={filteredTasks} onComplete={toggleCompleteTask} onDelete={deleteTask} />
    </div>
  );
}

export default Home;

function TaskItem({ task, onComplete, onDelete }) {
    return (
      <div className={`task-item p-4 rounded shadow ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p>Due: {task.dueDate || 'No date'} at {task.time || 'No time'}</p>
        <div className="mt-4">
          <button
            className={`px-4 py-2 mr-2 rounded text-white ${task.completed ? 'bg-yellow-500' : 'bg-green-500'}`}
            onClick={() => onComplete(task.id)}
          >
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;
  
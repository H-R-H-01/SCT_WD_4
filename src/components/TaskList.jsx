import TaskItem from './TaskItem';

function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div className="task-list grid grid-cols-1 gap-4">
      {tasks.length === 0 ? (
        <p className="text-center">No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;

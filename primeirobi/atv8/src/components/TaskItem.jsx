function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <li className={task.done ? "done" : ""}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.text}</span>
      </div>
      
      <button 
        className="remove-btn"
        onClick={() => removeTask(task.id)}
      >
        Remover
      </button>
    </li>
  );
}

export default TaskItem;
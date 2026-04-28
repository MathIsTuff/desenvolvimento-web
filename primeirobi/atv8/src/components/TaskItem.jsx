function TaskItem({ task, toggleTask, removeTask }) {
  return (
    <li
      className={task.done ? "done" : ""}
      onClick={() => removeTask(task.id)}
    >
      <span>{task.text}</span>

      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
        onClick={(e) => e.stopPropagation()}
      />
    </li>
  );
}

export default TaskItem;
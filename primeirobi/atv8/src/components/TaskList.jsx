import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
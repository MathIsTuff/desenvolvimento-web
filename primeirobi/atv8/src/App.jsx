import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      done: false
    };

    setTasks([newTask, ...tasks]);
  }

  function toggleTask(id) {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );

    const ordered = [
      ...updated.filter(t => !t.done),
      ...updated.filter(t => t.done)
    ];

    setTasks(ordered);
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <main>
      <section className="container">
        <h1>
          TDH <span>(tá lendo pq essa bomba)</span>
        </h1>

        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      </section>
    </main>
  );
}

export default App;
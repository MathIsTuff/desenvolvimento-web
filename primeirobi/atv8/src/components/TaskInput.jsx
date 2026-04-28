import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  function handleAdd() {
    addTask(text);
    setText("");
  }

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default TaskInput;
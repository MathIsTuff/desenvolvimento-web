import TaskItem from "./TaskItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRef, useEffect, createRef } from "react";

function TaskList({ tasks, toggleTask, removeTask }) {
  const nodeRefs = useRef(new Map());

  useEffect(() => {
    nodeRefs.current.forEach((_, id) => {
      if (!tasks.find(task => task.id === id)) {
        nodeRefs.current.delete(id);
      }
    });
  }, [tasks]);

  return (
    <TransitionGroup component="ul">
      {tasks.map(task => {
        if (!nodeRefs.current.has(task.id)) {
          nodeRefs.current.set(task.id, createRef());
        }

        const nodeRef = nodeRefs.current.get(task.id);

        return (
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames="item"
            nodeRef={nodeRef}
          >
            <TaskItem
              task={task}
              toggleTask={toggleTask}
              removeTask={removeTask}
              nodeRef={nodeRef}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default TaskList;
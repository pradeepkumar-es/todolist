import React from 'react';

const TodoItem = ({ task, onToggle }) => {
  return (
    <li>
     <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <span>{task.text}</span>
    </li>
  );
}

export default TodoItem;
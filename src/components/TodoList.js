import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Exercise at 5PM', completed: false },
    { id: 2, text: 'Classes at 10PM', completed: false },
    { id: 3, text: 'Classes at 11PM', completed:false },
    { id: 4, text: 'runnig at 5AM', completed:false },
    { id: 5, text: 'Classes at 4PM', completed:false },
  ]);

  const handleToggle = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} onToggle={handleToggle} />
      ))}
   </ul>
 );

}

export default TodoList;
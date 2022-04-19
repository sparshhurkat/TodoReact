import AddTodo from "./AddTodo";
import React, { useState } from "react";


const TodoList=()=>{
    const [tasks, setTasks] = useState([]);
  
    const addTask = text => setTasks([...tasks, { "text":text,"isCompleted":false }]);
  
    const toggleTask = index => {
      const newTasks = [...tasks];
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      setTasks(newTasks);
      console.log(newTasks);
    };
  
    const removeTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      console.log(newTasks);
    };
  
    return (
      <div className="todo-list">
        <AddTodo addTask={addTask} />
        {tasks.map((task, index) => (
          <div className="todo">
            <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}><i class="fas fa-trash-alt"></i></button>
          </div>
        ))}
        
      </div>
    );
};

export default TodoList;
import React, { useState } from 'react'

export default function TodoApp() {
    const [todos, setTodos] = useState('Eat');
    const [newTodos, setNewTodos] = useState("");


  return (
    <div>
      <input type="text" placeholder='Add Your Todo' /><br /><br />
      <button onClick={AddTodo}>Add Task</button><br /><br />

      <hr />
      <h3> Tasks Todo</h3>
      <ul>
        {todos.map((todo) => ( 
            <li>{todo}</li>
            ))}
      </ul>
    </div>
  )
}

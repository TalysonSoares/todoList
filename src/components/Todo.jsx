import React from 'react'
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const Todo = ({ todo, removeTodo, completeTodo }) => {

  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <Button variant='outline-success'  onClick={() => completeTodo(todo.id)}>Completar</Button>
            <Button variant='outline-danger'  onClick={() => removeTodo(todo.id)}>Deletar</Button>
          </div>
    </div>
  )
}

export default Todo
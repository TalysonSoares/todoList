import {useState} from 'react'


const Todo = ({ todo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviou formulario!")
    }

  return (
    <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <button className="complete">Completar</button>
            <button className="remove">X</button>
          </div>
    </div>
  )
}

export default Todo
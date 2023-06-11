import { useState } from "react";
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function TodoList({ toDos }) {
    console.log(toDos)
    return (
        <ul>
            {toDos.map((todo, index) => {
                return <li key={index} >{todo} </li>
            })}
        </ul>
    )
}

export default function ToDo() {
    const [toDos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    function addTodo() {
        setTodos([...toDos, newTodo]);
        setNewTodo("")
    }

    return (
        <div className="m-3">
            <input
                type="text"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
            />
            <Button variant="primary" className="ms-3" onClick={addTodo}>
                Add
            </Button>
            <TodoList toDos={toDos} />
        </div>

    )
}
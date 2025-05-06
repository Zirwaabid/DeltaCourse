import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function () {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    const [newTodo, setNewTodo] = useState([""]);
    const addNewTodo = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
        setNewTodo("");
    }
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    return <>
        <input value={newTodo} onChange={updateTodoValue} placeholder="Write Task To Add" />
        <br /><br />
        <button onClick={addNewTodo}>Add Task</button>
        <br /><br />
        <hr />
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>

        </div>
    </>
}
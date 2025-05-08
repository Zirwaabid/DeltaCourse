import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function () {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    const [newTodo, setNewTodo] = useState([""]);
    const addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    }
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }
    const uppercaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        );
    };
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
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={uppercaseAll}>Uppercase All</button>
        </div>
    </>
}
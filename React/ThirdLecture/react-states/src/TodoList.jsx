import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './TodoApp.css';


export default function () {
    const [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    const [newTodo, setNewTodo] = useState([""]);
    const addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    const deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    const UpperCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        );
    };

    const UpperCaseOne = (id) => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }
                else {
                    return todo;
                }
            }))
    };

    const DoneAll = () => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                }

            })
        );
    }

    const DoneOne = (id) => {
        setTodos((prevTodo) =>
            prevTodo.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: true
                    }
                } else {
                    return todo
                }
            }))
    }

    return (
        <div className="todo-container">
            <input value={newTodo} onChange={updateTodoValue} placeholder="Write Task To Add" />
            <button onClick={addNewTodo}>Add Task</button>
            <hr />
            <div>
                <h3>Todo List</h3>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => UpperCaseOne(todo.id)}>Uppercase</button>
                            <button onClick={() => DoneOne(todo.id)}>Mark as done</button>
                        </li>
                    ))}
                </ul>
                <hr />
                <button onClick={UpperCaseAll}>Uppercase All</button>
                <button onClick={DoneAll}>Mark as done All</button>
            </div>
        </div>
    );

}
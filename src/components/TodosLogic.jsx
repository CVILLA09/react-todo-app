import React, { useState } from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Build a Todo App", completed: false },
        { id: 3, title: "Master React Hooks", completed: false },
    ]);

    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: 4, // We'll replace this with a dynamically generated ID later
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} /> {/* Pass addTodoItem as a prop */}
            <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
        </div>
    );
};

export default TodosLogic;

import React from 'react';
import { useState } from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        // ...
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
    return (
        <div>
            <InputTodo />
            <TodosList todosProps={todos} handleChange={handleChange} /> {/* Pass handleChange here */}
        </div>
    );
};

export default TodosLogic;

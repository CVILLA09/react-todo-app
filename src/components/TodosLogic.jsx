import React, { useState } from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        // ... (initial todos here)
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

    return (
        <div>
            <InputTodo />
            <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
        </div>
    );
};

export default TodosLogic;

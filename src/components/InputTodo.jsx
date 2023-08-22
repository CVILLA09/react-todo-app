import React, { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false); // Add error state

    const handleChange = (e) => {
        setTitle(e.target.value);
        setError(false); // Clear error when input changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTodoItem(title);
            setTitle('');
        } else {
            setError(true); // Set error if title is empty
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={handleChange}
            />
            <button>Submit</button>
            {error && <div>Please add item</div>}
        </form>
    );
};

export default InputTodo;

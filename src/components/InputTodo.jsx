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
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                placeholder="Add Todo..."
                value={title}
                onChange={handleChange}
                className="input-text"
            />
            <button className="input-submit">Submit</button>
            {error && <span className="submit-warning">Please add item</span>}
        </form>
    );
};

export default InputTodo;

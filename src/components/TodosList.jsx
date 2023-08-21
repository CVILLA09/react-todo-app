const TodosList = ({ todosProps }) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default TodosList;

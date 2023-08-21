const TodosList = (props) => {
    return (
        <ul>
            {props.todosProps.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
};

export default TodosList;

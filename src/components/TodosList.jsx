import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem
                    key={todo.id}
                    itemProp={todo}
                    handleChange={handleChange}
                    delTodo={delTodo} // Pass delTodo here
                />
            ))}
        </ul>
    );
};
export default TodosList;

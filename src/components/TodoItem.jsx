const TodoItem = ({ itemProp }) => {
    const handleChange = (id) => {
        console.log('clicked', id);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={itemProp.completed}
                onChange={() => handleChange(itemProp.id)}
            />
            {itemProp.title}
        </li>
    );
};
export default TodoItem;

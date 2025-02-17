import { useTodo } from '../context/TodoContext';

const TodoList = () => {
  const { state, dispatch } = useTodo();

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
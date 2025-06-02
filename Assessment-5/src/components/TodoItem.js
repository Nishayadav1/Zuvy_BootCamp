import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '../api/todoapi';

export default function TodoItem({ todo, onDelete }) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation({
    mutationFn: (completed) => updateTodo({ id: todo.id, title: todo.title, completed }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const handleToggle = (e) => {
    toggleMutation.mutate(e.target.checked);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <Link to={`/edit-todo/${todo.id}`} style={{ margin: '0 10px' }}>Edit</Link>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      {toggleMutation.isLoading && <span> Updating...</span>}
    </li>
  );
}

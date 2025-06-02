import { useState } from 'react';

const TodoForm = ({ initialData = { title: '', completed: false }, onSubmit, isSubmitting = false }) => {
  const [title, setTitle] = useState(initialData.title);
  const [completed, setCompleted] = useState(initialData.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Title cannot be empty!');
      return;
    }
    onSubmit({ title, completed });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        placeholder="Todo title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        disabled={isSubmitting}
      />
      <label>
        Completed:
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={(e) => setCompleted(e.target.checked)} 
          disabled={isSubmitting}
        />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default TodoForm;
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../api/todoapi';
import TodoForm from '../components/TodoForm';

export default function AddTodo() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      navigate('/');
    },
  });

  const handleSubmit = (todoData) => {
    mutation.mutate(todoData);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>Add New Todo</h1>
      <TodoForm 
        onSubmit={handleSubmit} 
        isSubmitting={mutation.isLoading}
      />
      {mutation.isError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {mutation.error.message}
        </div>
      )}
    </div>
  );
}
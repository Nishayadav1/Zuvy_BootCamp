import { json } from 'react-router-dom';

export async function loader() {
  const res = await fetch('https://api.example.com/todos');
  const todos = await res.json();
  return json(todos);
}

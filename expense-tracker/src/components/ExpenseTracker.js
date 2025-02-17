import React, { useReducer, useState, useEffect } from 'react';
import '../styles.css';
const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? { ...expense, ...action.payload } : expense
        ),
      };
    case 'LOAD_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  expenses: [],
};

const ExpenseTracker = () => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    dispatch({ type: 'LOAD_EXPENSES', payload: savedExpenses });
  }, []);


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state.expenses]);

  const addExpense = (e) => {
    e.preventDefault();
    if (name && amount) {
      const newExpense = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
      };
      dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
      setName('');
      setAmount('');
    }
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  const updateExpense = (id) => {
    const expenseToUpdate = state.expenses.find((expense) => expense.id === id);
    if (expenseToUpdate) {
      setName(expenseToUpdate.name);
      setAmount(expenseToUpdate.amount);
      setEditId(id);
    }
  };

  const saveUpdate = (e) => {
    e.preventDefault();
    if (name && amount && editId) {
      const updatedExpense = {
        id: editId,
        name,
        amount: parseFloat(amount),
      };
      dispatch({ type: 'UPDATE_EXPENSE', payload: updatedExpense });
      setName('');
      setAmount('');
      setEditId(null);
    }
  };

  const totalExpenses = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={editId ? saveUpdate : addExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">{editId ? 'Update Expense' : 'Add Expense'}</button>
      </form>
      <ul>
        {state.expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - Rs. {expense.amount } 
            <button onClick={() => updateExpense(expense.id)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Total Expenses: Rs. {totalExpenses.toFixed(2)}</h2>
    </div>
  );
};

export default ExpenseTracker;
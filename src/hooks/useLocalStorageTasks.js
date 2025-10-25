import { useState, useEffect } from 'react';

/**
 * useLocalStorageTasks
 * Manages tasks state with localStorage persistence.
 * Returns { tasks, addTask, toggleTask, deleteTask }
 */
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.warn('Failed to parse tasks from localStorage', err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (err) {
      console.warn('Failed to save tasks to localStorage', err);
    }
  }, [tasks]);

  const addTask = (text) => {
    if (!text || !text.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: text.trim(), completed: false, createdAt: new Date().toISOString() },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

export default useLocalStorageTasks;

import { useState, useEffect } from 'react';

const useApi = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
}

export const useProducts = () => useApi('https://jsonplaceholder.typicode.com/todos');
export const useUsers = () => useApi('https://jsonplaceholder.typicode.com/users');



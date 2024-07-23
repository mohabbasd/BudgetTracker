// pages/tasks.tsx
import { useEffect, useState } from 'react';
import { Task } from '../data/tasks';

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch('/api/tasks');
      const data: Task[] = await res.json();
      setTasks(data);
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

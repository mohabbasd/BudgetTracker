// pages/api/tasks/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { tasks } from '../data/tasks';

type Task = {
  id: number;
  title: string;
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id as string));

  if (taskIndex === -1) {
    res.status(404).json({ message: 'Task not found' });
    return;
  }

  switch (method) {
    case 'GET':
      res.status(200).json(tasks[taskIndex]);
      break;
    case 'PUT':
      const updatedTask: Task = { ...tasks[taskIndex], ...req.body };
      tasks[taskIndex] = updatedTask;
      res.status(200).json(updatedTask);
      break;
    case 'DELETE':
      tasks.splice(taskIndex, 1);
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

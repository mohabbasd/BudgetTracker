// pages/api/tasks/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { tasks } from '../data/tasks';

type Task = {
  id: number;
  title: string;
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      const newTask: Task = req.body;
      tasks.push(newTask);
      res.status(201).json(newTask);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

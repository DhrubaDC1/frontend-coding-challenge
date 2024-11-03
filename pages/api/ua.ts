// pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.headers['user-agent'];

  const data = {
    userAgent: userAgent || 'User agent not found',
  };

  res.status(200).json(data);
}

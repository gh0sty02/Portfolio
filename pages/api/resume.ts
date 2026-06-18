import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const resumeDir = path.join(process.cwd(), 'resume');
  const file = fs.readdirSync(resumeDir).find((name) => name.toLowerCase().endsWith('.pdf'));

  if (!file) {
    res.status(404).end('Resume not found');
    return;
  }

  const pdf = fs.readFileSync(path.join(resumeDir, file));
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename="${file}"`);
  res.status(200).send(pdf);
}

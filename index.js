import express from 'express';
import path from 'node:path';
import dotenv from 'dotenv';
import db from './db/index.js';

dotenv.config();
const knexdb = db.init();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => res.sendFile(path.resolve('view', 'index.html')));

app.post('/usersDetails', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({
      err: 'Pls provide name and email',
    });
  try {
    await knexdb('users').insert({ name, email });
  } catch (err) {
    console.log(err);
  }
  res.redirect('/users');
});

app.get('/users', async (req, res) => {
  const users = await knexdb.select().from('users');
  res.json(users);
});
app.listen(PORT, () => `listening on  port ${PORT}`);

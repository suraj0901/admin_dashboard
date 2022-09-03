import express from 'express';
import path from 'node:path';
import dotenv from 'dotenv';
import db from './db/index.js';

dotenv.config();
db.init();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve('view', 'index.html')));

// app.set('/' (req, res) => {
// })
app.listen(PORT, () => `listening on  port ${PORT}`);

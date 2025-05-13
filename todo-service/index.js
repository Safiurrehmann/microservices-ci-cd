const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { task } = req.body;
  todos.push({ id: Date.now(), task });
  res.json({ message: 'Todo added' });
});

app.listen(3002, () => console.log('Todo service running on port 3002'));

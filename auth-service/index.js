const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ token: 'dummy-token' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(3001, () => console.log('Auth service running on port 3001'));

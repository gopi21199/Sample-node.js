// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Your Node.js app is up and running!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

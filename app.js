const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
res.send('Olá mundo!');
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
  });

app.listen(3000, () =>
console.log('Servidor executando')
);
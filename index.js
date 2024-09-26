const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.static('pages/style'));
app.use(express.static(__dirname + '/pages/style'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.get('/cosmo', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/cosmo.html'));
});

app.get('/ins_1', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/ins_1.html'));
});
app.get('/ins_2', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/ins_2.html'));
});
app.get('/ins_3', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/ins_3.html'));
});
app.get('/ins_4', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/ins_4.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

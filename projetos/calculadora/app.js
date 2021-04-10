const express = require('express');
const app = express();

app.get('/soma', function (request, response) {
  const a = parseInt(request.query.a);
  console.log('a = ' + a);
  const b = parseInt(request.query.b);
  console.log('b = ' + b);
  const soma = a + b;
  console.log('a + b = ' + soma);

  response.send('Soma entre a e b é igual a ' + soma);
});

app.get('/subtracao', function (request, response) {
  const a = parseInt(request.query.a);
  console.log('a = ' + a);
  const b = parseInt(request.query.b);
  console.log('b = ' + b);
  const subtracao = a - b;
  console.log('a - b = ' + subtracao);

  response.send('Subtração entre a e b é igual a ' + subtracao);
});

app.get('/multiplicacao', function (request, response) {
  const a = parseInt(request.query.a);
  console.log('a = ' + a);
  const b = parseInt(request.query.b);
  console.log('b = ' + b);
  const multiplicacao = a * b;
  console.log('a * b = ' + multiplicacao);

  response.send('Multiplicação entre a e b é igual a ' + multiplicacao);
});

app.get('/divisao', function (request, response) {
  const a = parseInt(request.query.a);
  console.log('a = ' + a);
  const b = parseInt(request.query.b);
  console.log('b = ' + b);
  const divisao = a / b;
  console.log('a / b = ' + divisao);

  response.send('Divisão entre a e b é igual a ' + divisao);
});

app.listen(3000, function () {
  console.log('Servidor iniciado na porta 3000');
});

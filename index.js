import express from 'express';

const app = express();

app.get('/login', (req, res) => {
  console.log(req);
  res.send('{"login": True}');
});

app.listen(3000, () => {
  console.log('coucou je fonctione');
});

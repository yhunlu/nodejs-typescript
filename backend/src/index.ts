import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const a: number = 5;
const b: number = 2;

app.get('/', (req:any ,res:any ) => {
  res.send(`1 + 2 = ${a + b}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

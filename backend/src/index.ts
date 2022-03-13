import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const a: string = "welcome";
const b: string = "typescript";

app.get('/', (req:any ,res:any ) => {
  res.send(`${a} to ${b}`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express, { Request, Response } from 'express';
import router from './routes/routes';

const app = express();
const port = 3002;

app.use(express.json());

// Use the property routes
app.use("/api", router);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
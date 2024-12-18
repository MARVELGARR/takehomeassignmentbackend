import express, { Request, Response } from 'express';
import router from './routes/routes';
import cors from "cors"

const app = express();
const port = 3002;

app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:3000', 'https://your-domain.com'], // Allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions));

// Use the property routes
app.use("/api", router);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
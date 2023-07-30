import  express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './router/user.router';
import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */});

const db = pgp('postgres://postgres:post18288@localhost:5432/postgres');

const app = express();
app.use(express.json());

const validateApiKey = (req: Request, res: Response, next: NextFunction) =>  {
    const apiKey = req.headers.apikey;

    if (apiKey && apiKey === '123') {
        next();
    } else {
        res.status(401).send('Invalid Key');
    }
}
app.use('/users', validateApiKey, userRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Our server is listening on port ${port}`);
});

export default db;
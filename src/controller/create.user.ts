import { Request, Response, NextFunction } from 'express';
import pool from "../index";
export class CreateUser {
    constructor() {}

  public async create(req: Request, res: Response, next: NextFunction) {
      

        try {
          const { name, surname, age }  = req.body;
          const user = await pool.query('INSERT INTO users(name, surname, age) VALUES($1, $2, $3)', [name, surname, age]);

          res.status(201).json('User succesfully created');


        } catch (err) {
          res.status(500).json({ error: (err as Error).message });
        }
    }
}
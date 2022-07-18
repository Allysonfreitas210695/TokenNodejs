import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from 'jsonwebtoken';

export async function AuthenticateToken(req:Request, res: Response, next: NextFunction): Promise<void>{
try {
  const auth = req.headers.authorization;

  if(!auth || auth === undefined){
    res.status(StatusCodes.UNAUTHORIZED).send({message: "required token"})
  }

    const token = auth?.split(" ")[1];
    const secret: string = process.env.SECRET_KEY || "my_secret";
    
    JWT.verify(token as string, secret, (err, decoded) => {
      if(err){
        res.status(StatusCodes.UNAUTHORIZED).send({message: err.message});
      }

      console.log(decoded);
      
    });

    next();
  
} catch (error) {
  res.status(StatusCodes.BAD_REQUEST).json(error);
}
}
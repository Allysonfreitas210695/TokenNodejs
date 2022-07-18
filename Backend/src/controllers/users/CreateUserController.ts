import { NextFunction, Request, Response } from "express";
import { IUser } from "../../interfaces";
import { UserService } from "../../services/userServices";
import {v4 as uuid4 } from 'uuid';
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { BadResquestError, UnauthorizedError } from "../../errors";

const validateParams = (...params: string[]): boolean => {
  const filter = params.filter(param => param === undefined || param.length === 0);
  return filter.length === 0;
}

export class CreateUserController {
  async handle(req: Request<IUser>, res: Response, next: NextFunction): Promise<void>{
    console.log("aqui");
    
    try {
      
      const {firstName, lastName, password, email} = req.body;
      
      // workingexample@email.com
      let regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

      if(!regex.test(email).valueOf()){
        throw new BadResquestError("email is not a valid email");
      }

      if(!validateParams(firstName, lastName, password, email)){
        throw new BadResquestError("params is required!");
      }

      const userEmailExits = await UserService.findOne({
        where: {
          email
        }
      })

      if(userEmailExits){
        throw new UnauthorizedError("User is exist!");
      }
    
      const bcryptPasswords = await bcrypt.hash(password, 8);

      const createUser = await UserService.create({ id: uuid4(), firstName, lastName, email, password: bcryptPasswords});
    
      if(!createUser) {
        throw new BadResquestError("createUser error");
      }

      res.status(StatusCodes.CREATED).json(createUser);
    } catch (error) {
      next(error);
    }
    
  }
}
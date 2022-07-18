import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../../errors";
import { IUser } from "../../interfaces";
import { UserService } from "../../services/userServices";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

export class LoginController {
  async handle(req: Request<IUser>, res: Response, next: NextFunction){
    try {
      const { email , password } = req.body; 

      if(email === undefined || email.length === 0){
        throw new UnauthorizedError("Please enter a valid email");
      }

      if(password === undefined || password.length === 0){
        throw new UnauthorizedError("Please enter a valid password");
      }

      const userExisted: any = await UserService.findOne({ where: { email } });

      if(!userExisted){
        throw new UnauthorizedError("User not found");
      }

      const hash = await bcrypt.hash(password,8);
      

      if(!(await bcrypt.compare(password, userExisted.password))){
        throw new UnauthorizedError("User not found");
      }

      const userReturn: IUser = {
        id: userExisted.id,
        firstName: userExisted.firstName,
        lastName: userExisted.lastName
      }

      const secret: string | undefined = process.env.SECRET_KEY || "my_secret";
      const expiresIn: string | undefined = process.env.EXPIRES_IN || "2h";

      const token = JWT.sign({id: userReturn.id}, secret, {
        expiresIn: expiresIn
      });

      res.status(StatusCodes.OK).send({
        user: userReturn,
        token: token
      });
    } catch (error) {
      next(error);
    }

  }
}
import { NextFunction, Request, Response } from "express";
import { IUser } from "../../interfaces";
import { UserService } from "../../services/userServices";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { BadResquestError, ForbiddenError, NotFoundError } from "../../errors";

export class UpdateUserController {
  async handle(req: Request<IUser>, res: Response, next: NextFunction){
    try {
      const { id } = req.params;
      
      const {firstName, lastName, password, email} = req.body;
      
      if(id?.length === 0 || id === undefined){
        throw new BadResquestError("Parameters required for update user Update");
      }
      
      const bcryptPassword = await bcrypt.hash(password, 8);

      const userSearch = await UserService.findOne({
        where: {
          id
        }
      })

      if(!userSearch) {
        throw new NotFoundError("User not found");
      }
      
      const userUpdate = await UserService.update({id, firstName, lastName, email, password: bcryptPassword}, {
        where: {
          id
        }
      })

      if(!userUpdate){
        throw new ForbiddenError("User not found");
      }

      res.status(StatusCodes.ACCEPTED).send('User wiht updated successfully');
    } catch (error) {
      next(error);
    }
    
  }
}
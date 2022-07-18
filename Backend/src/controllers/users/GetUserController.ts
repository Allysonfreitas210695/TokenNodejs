import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadResquestError, DatabaseError } from "../../errors";
import { UserService } from "../../services/userServices";

export class GetUserController {
  async handle(req: Request, res: Response, next: NextFunction){
    try {
      const { id } = req.params;

      const user = await UserService.findOne({
        where: {
          id: id,
        },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
      })

      if(!user) {
        throw new DatabaseError("User not exist");
      }
      
      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      next(error);
    }
    
  }
}
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadResquestError, DatabaseError } from "../../errors";
import { IUser } from "../../interfaces";
import { UserService } from "../../services/userServices";

export class DeleteUserController {
  async handle(req: Request<IUser>, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;

      const userDelete = await UserService.destroy({
        where:{
          id: id
        }
      })

      if(!userDelete) {
        throw new BadResquestError("user not found");
      }

      res.status(StatusCodes.NO_CONTENT).json({ messege: 'sucess destroy'});
    } catch (error) {
      next(error);
    }
    
  }
}
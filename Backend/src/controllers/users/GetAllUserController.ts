import { Request, Response } from "express";
import { UserService } from "../../services/userServices";

export class GetAllUserController {
  async handle(req: Request, res: Response){
    const users = await UserService.findAll({
      attributes: { exclude: [ 'createdAt', 'updatedAt'] }
    });
    
    res.status(200).send(users);
  }
}
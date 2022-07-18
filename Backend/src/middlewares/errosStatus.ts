import { NextFunction, Request, Response } from "express";
import { BadResquestError, DatabaseError, NotFoundError, UnauthorizedError } from "../errors";
import { StatusCodes } from "http-status-codes";
import { ForbiddenError } from "../errors";

export function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
  if(error instanceof DatabaseError){
    res.status(StatusCodes.BAD_REQUEST).json({error: `${error.message}`});
  }else if(error instanceof ForbiddenError){
    res.status(StatusCodes.FORBIDDEN).json({error: `${error.message}`});
  }else if(error instanceof BadResquestError){
    res.status(StatusCodes.BAD_REQUEST).json({error: `${error.message}`});
  }else if(error instanceof NotFoundError){
    res.status(StatusCodes.NOT_FOUND).json({error: `${error.message}`});
  }else if(error instanceof UnauthorizedError){
    res.status(StatusCodes.UNAUTHORIZED).json({error: `${error.message}`});
  }else {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
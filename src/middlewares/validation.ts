import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { UserSchema } from "../services/schema_validation";

export const bodyValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const response = UserSchema.validate(body);
  if (!response.error) {
    next();
  } else {
    const error = response.error.details[0].message;
    res.json(error);
  }
};

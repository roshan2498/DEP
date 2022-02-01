import { schema } from "../services/schema_validation";
import { Request, Response, NextFunction } from "express";

export const validation = (User: { rawAttributes: {} }) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    let nextStep = true;
    const userColumns = Object.keys(User.rawAttributes);
  };
};

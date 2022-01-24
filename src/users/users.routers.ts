import express, { Request, Response } from "express";
import * as UserService from "../services/user.services";
import { BaseUser, User } from "../models/user.interface";
import { v4 as uuid } from "uuid";

export const usersRouter = express.Router();

usersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await UserService.findAll();
    res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const user = await UserService.find(id);
    if (user) {
      return res.status(200).send(user);
    }
    res.status(404).send(`User with id ${id} not found`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const user: BaseUser = req.body;
    const newUser: User = await UserService.create({ ...user, id: uuid() });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.put("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const userUpdate: User = req.body;
    const existingUser: User = await UserService.find(id);
    if (existingUser) {
      const updatedUser = await UserService.update(id, userUpdate);
      return res.status(200).json(updatedUser);
    }
    const newUser = await UserService.create(userUpdate);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const user = await UserService.find(id);
    if (user) {
      await UserService.remove(id);
      return res.status(200).send(`User with id ${id} deleted`);
    }
    res.status(404).send(`User with id ${id} not found`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";
import { UserSchema } from "./schema_validation";
import Joi from "joi";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, login, password } = req.body;
    await UserSchema.validateAsync(req.body);
    await User.create({
      id: uuidv4(),
      firstName,
      lastName,
      age,
      login,
      password,
    });
    res.status(201).json({ message: "User Created!" });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (err: any) {
    if (err.isJoi === true) {
      res.status(422).json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, login, password } = req.body;
    const result = await UserSchema.validateAsync(req.body);
    await User.update(
      { firstName, lastName, age, login, password },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "User Updated!" });
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (user) {
      user.set({
        isDeleted: true,
      });
      await user.save();
      res.status(200).json({ message: "User Deleted!" });
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  } catch (err: any) {
    res.status(500).json({ err: err.message });
  }
};

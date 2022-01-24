import { BaseUser, User } from "../models/user.interface";
import { v4 as uuid } from "uuid";

let users: User[] = [];

export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: string): Promise<User> => {
  const user = users.find((user) => user.id === id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
};

export const create = async (newUser: User): Promise<User> => {
  // check for validation
  newUser.id = uuid();
  users.push(newUser);
  return newUser;
};

// update user
export const update = async (
  id: string,
  newuser: User
): Promise<User | null> => {
  const user = await find(id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  users = users.map((user) => (user.id === id ? newuser : user));
  return newuser;
};

export const remove = async (id: string): Promise<User | null> => {
  const user = await find(id);
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  user.isDeleted = false;
  return user;
};

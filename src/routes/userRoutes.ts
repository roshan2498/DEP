import express, { Router } from "express";
import { bodyValidator } from "../middlewares/validation";

import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/userServices";

const router: Router = express.Router();

// Get All Users
router.get("/users", getAllUsers);
// Create New User
router.post("/users", bodyValidator, createUser);
// Get User By Id
router.get("/users/:id", getUserById);
// Update User By Id
router.put("/users/:id", bodyValidator, updateUser);
// Delete User
router.delete("/users/:id", deleteUser);

export default router;

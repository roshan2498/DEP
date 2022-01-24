import express, { Router } from "express";

import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/userServices";

const router: Router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/users").post(createUser);
router.route("/users/:id").get(getUserById);
router.route("/users/:id").put(updateUser);
router.route("/users/:id").delete(deleteUser);
export default router;

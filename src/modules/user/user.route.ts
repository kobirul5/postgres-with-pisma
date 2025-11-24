import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// Create a new user
router.post("/", UserController.createUser);

// Get all users
router.get("/", UserController.getAllUsers);

// Get a single user by ID
router.get("/:id", UserController.getUserById);

// Update a user by ID
router.patch("/:id", UserController.updateUser);

// Delete a user by ID
router.delete("/:id", UserController.deleteUser);

export const UserRoute = router;

import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await UserService.createUser(payload);

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create user" });
    }
};

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUsers();

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch users" });
    }
};

const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // make number id
        const idNumber = Number(id);
        const result = await UserService.getUserById(idNumber);

        if (!result) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch user" });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const idNumber = Number(id);
        const result = await UserService.updateUser(idNumber, payload);

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update user" });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const idNumber = Number(id);
        const result = await UserService.deleteUser(idNumber);

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete user" });
    }
};

export const UserController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

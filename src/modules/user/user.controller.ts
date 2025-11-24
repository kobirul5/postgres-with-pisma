import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req:Request, res:Response) => {
    try {

        const payload = req.body;

        const result = await UserService.createUser(payload);

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.log(error);
    }
};
const getAllUsers = async (req:Request, res:Response) => {
    try {


        const result = await UserService.getAllUsers();

        res.status(200).json({
            success: true,
            message: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const UserController = {
    createUser,
    getAllUsers
};
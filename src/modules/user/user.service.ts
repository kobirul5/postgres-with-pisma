import { User } from "../../generated/prisma/browser";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createUser = async (payload:Prisma.UserCreateInput):Promise<User> => {
    console.log("Creating user...");
    console.log(payload);
    const result = await prisma.user.create({ data: payload });
    
    return result;
};
const getAllUsers = async ():Promise<Partial<User>[]> => {

    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            isVerified: true,
            picture: true,
            phone: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    
    return result;
};

export const UserService = {
    createUser,
    getAllUsers
};
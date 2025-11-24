import { Post } from "../../generated/prisma/browser";
import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createPost = async (payload: Prisma.PostCreateInput): Promise<Post> => {
    const result = await prisma.post.create({ data: payload });
    return result;
};

const getAllPosts = async (): Promise<Partial<Post>[]> => {
    const result = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            thumbnail: true,
            isFeatured: true,
            tags: true,
            views: true,
            authorId: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return result;
};

const getPostById = async (id: number): Promise<Partial<Post> | null> => {
    const result = await prisma.post.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            content: true,
            thumbnail: true,
            isFeatured: true,
            tags: true,
            views: true,
            authorId: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return result;
};

const updatePost = async (id: number, payload: Prisma.PostUpdateInput): Promise<Post> => {
    const result = await prisma.post.update({
        where: { id },
        data: payload,
    });
    return result;
};

const deletePost = async (id: number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: { id },
    });
    return result;
};

export const PostService = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};

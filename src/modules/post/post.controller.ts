import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await PostService.createPost(payload);

        res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create post" });
    }
};

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const result = await PostService.getAllPosts();
        res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch posts" });
    }
};

const getPostById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = await PostService.getPostById(id);

        if (!result) return res.status(404).json({ success: false, message: "Post not found" });

        res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch post" });
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const payload = req.body;
        const result = await PostService.updatePost(id, payload);

        res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update post" });
    }
};

const deletePost = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = await PostService.deletePost(id);

        res.status(200).json({ success: true, message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete post" });
    }
};

export const PostController = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};

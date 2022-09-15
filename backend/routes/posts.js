import express from "express";
import { getPosts, createPost, deletePost } from "../controllers/postsCon.js";
import { login } from "../controllers/authCon.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);
router.post("/login", login);

export default router;

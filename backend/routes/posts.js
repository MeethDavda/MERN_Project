import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  addCart,
  removeCart,
} from "../controllers/postsCon.js";
import { getUsers, login } from "../controllers/authCon.js";

const router = express.Router();
router.get("/posts", getPosts);
router.get("/users", getUsers);
router.post("/create", createPost);
router.delete("/delete/:id", deletePost);
router.post("/login", login);
router.patch("/addCart/:id", addCart);
router.patch("/removeCart/:id", removeCart);

export default router;

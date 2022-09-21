import axios from "axios";

// const url = "http://localhost:5000/posts";
const API = axios.create({
  baseURL: "http://localhost:5000/posts",
  headers: {
    "Content-type": "application/json",
  },
});

export const fetchPosts = () => API.get("/");
export const createPost = (newPost) => API.post("/create", newPost);
export const deletePost = (id) => API.delete(`/delete/${id}`);
export const loginUser = (data) => API.post("/login", data);
export const addCart = (id) => API.patch(`/addCart/${id}`);
export const removeCart = (id) => API.patch(`/removeCart/${id}`);

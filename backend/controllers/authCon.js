import userMessage from "../models/userMessage.js";

export const login = async (req, res) => {
  const data = req.body;
  // console.log("backend", data);
  const newUser = new userMessage(data);
  try {
    await newUser.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

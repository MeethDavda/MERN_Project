import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

const userMessage = mongoose.model("users", userSchema);
export default userMessage;

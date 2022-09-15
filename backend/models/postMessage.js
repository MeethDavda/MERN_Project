import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  selectedFile: String,
  createdAt: {
    type: String,
    default: new Date(),
  },
  likecount: {
    type: Number,
    default: 0,
  },
});

const postMessage = mongoose.model("postMessage", postSchema);
export default postMessage;

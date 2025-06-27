import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    work: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);

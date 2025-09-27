import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    suggestion: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Waitlist ||
  mongoose.model("Waitlist", WaitlistSchema);

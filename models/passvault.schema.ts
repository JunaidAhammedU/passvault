import mongoose, { Schema, Document } from "mongoose";

export interface PassDocument extends Document {
  label: string;
  username: string;
  password: string;
  userEmail: string;
  tag: any;
  isFavorite: boolean;
  createdAt: Date;
}

const PassvaultSchema: Schema<PassDocument> = new Schema({
  label: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  userEmail: { type: String },
  tag: { type: String },
  isFavorite: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  // tag: { type: Schema.Types.ObjectId, ref: "Tag" },
});

const Passvault =
  mongoose.models.Passvault ||
  mongoose.model<PassDocument>("Passvault", PassvaultSchema);
export default Passvault;

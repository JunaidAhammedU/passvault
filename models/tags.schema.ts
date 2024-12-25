import mongoose, { Schema, Document } from "mongoose";

export interface TagDocument extends Document {
  label: string;
  username: string;
  createdAt: Date;
}

const TagSchema: Schema<TagDocument> = new Schema({
  label: { type: String, required: true },
  username: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Tag =
  mongoose.models.Tag || mongoose.model<TagDocument>("Tag", TagSchema);
export default Tag;

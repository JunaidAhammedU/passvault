import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  imageUrl: string;
  phone: number;
}

const UserSchema: Schema<UserDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String, required: true },
  phone: { type: Number, required: true },
});

const User =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
export default User;

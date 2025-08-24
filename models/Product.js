import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail_image: { type: String, required: true },
  large_image: { type: String, required: true },
  category: { type: String, required: true },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

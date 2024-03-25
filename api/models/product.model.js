import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    summery: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: Array,
      default: [],
    },
    categoryId: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
    price: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    brand: {
      type: String,
      default: "none",
    },
    model: {
      type: String,
      default: "none",
    },
    releaseDate: {
      type: Date,
      default: Date.now(),
    },
    modelNumber: {
      type: String,
      default: "none",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://www.insaraf.com/cdn/shop/products/5_optimized_5a5ffac4-aeba-4f42-a9df-5e2b08dbea5c.png?v=1641295980",
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;

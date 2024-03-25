import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    productId: {
      type: Array,
      require: true,
    },
    paymentMethod: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: "ordered",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

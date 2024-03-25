import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    ciy: {
      type: String,
      require: true,
    },
    zipCode: {
      type: Number,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;

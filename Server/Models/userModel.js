import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["doner", "admin", "organization", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role == "doner" || this.role == "admin") {
          return true;
        } else {
          return false;
        }
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone no is Required *"],
    },
    address: {
      type: String,
      required: [true, "Address is Required *"],
    },
    originazationName: {
      type: String,
      required: function () {
        if (this.role == "originazation") {
          return true;
        } else {
          return false;
        }
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role == "hospital") {
          return true;
        } else {
          return false;
        }
      },
    },
  },
  { timestamps: true }
);
//export
const userModel = mongoose.model("users", userSchema);
export default userModel;

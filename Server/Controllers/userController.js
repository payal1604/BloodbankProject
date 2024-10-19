import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
const registerController = async (req, res) => {
  try {
    if (!req.body.role || !req.body.email || !req.body.password)
      res.status(404).send({ message: "All field is required" });
    let existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) res.status(404).send({ message: "User is already exists" });

    //hashing password
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = await userModel.create({
      ...req.body,
      password: hashPassword,
    });
    await user.save();
    res.status(201).send({ message: "user is created successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "INTERNAL SERVER ERROR", error: error.message });
  }
};
export default registerController;

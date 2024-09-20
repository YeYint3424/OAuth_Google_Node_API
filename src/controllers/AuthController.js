import jwt from "jsonwebtoken";
import { User } from "../db/models";

const AuthController = {
  async googleLogin(req, res, next) {
    if (!req.user) {
      return res.status(401).sent({ error: "User not authenticated" });
    }
    const { email } = req.user;
    const user = await User.findOne({ where: { email } });
    const token = jwt.sign(user.id, process.env.JWT_SECRET);
    return res.status(200).sent({ token, user });
  },
};

export default AuthController;

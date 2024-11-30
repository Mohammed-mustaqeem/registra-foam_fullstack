
import userModel from "../Model/userModel.js";

import { createUserService } from "../services/userService.js";

export const createUserController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existUser = await userModel.findOne({ email: email });
      if (existUser) {
        res.status(200).send({ status: "failed", message: "user alread exist" });
      } else {
        if (name && email && password) {
                       
            await createUserService(
             { name,
              email,
             
              password,
             }
            );
            res
              .status(201)
              .send({ status: "success", message: "User Create Successfully" });
         
        } else {
          res
            .status(400)
            .send({ status: "failed", message: "All Fields required" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
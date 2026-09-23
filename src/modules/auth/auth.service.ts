import type { NextFunction, Request, Response } from "express";
import userModel, { IUser } from "../../DB/models/user.model";
import { Model } from "mongoose";

class AuthService {
  private readonly _userModel : Model<IUser> = userModel
  constructor() {}
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    let { fname, lname, email, password, phone, age, gender } = req.body;

    const user = await this._userModel.create({ fname, lname, email, password, phone, age, gender })

    res.status(201).json({
      message : "done" , user
    })
  };
  signIn = async (req: Request, res: Response, next: NextFunction) => {};
}

export default new AuthService();

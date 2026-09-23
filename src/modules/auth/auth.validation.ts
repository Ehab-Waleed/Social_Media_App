import z from "zod";
import { userGender } from "../../common/enums/user.enum";

export const signUpSchema = {
  body: z.strictObject({
    fName: z.string().min(2).max(10),
    lName: z.string().min(2).max(10),
    email: z.email(),
    password: z.string(),
    phone: z.string().optional(),
    address: z.string().optional(),
    age: z.number().min(18).max(60).positive(),
    gender: z.enum(userGender).optional(),
  }),
};

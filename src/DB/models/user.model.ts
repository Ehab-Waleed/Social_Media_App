import mongoose, { Types } from "mongoose";
import { userGender, userProvider, userRole } from "../../common/enums/user.enum";

export interface IUser {
  _id: Types.ObjectId;
  fname: string;
  lname: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  age: number;
  gender?: userGender;
  provider?: userProvider;
  role?: userRole;
  isConfirmed?: boolean;
  profilePic?: string;
  changeCredentials?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    lname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return this.provider === userProvider.system;
      },
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      required: function (this : IUser) {
        return this.provider === userProvider.system;
      },
      min: 18,
      max: 60,
    },
    gender: {
      type: String,
      required: true,
      enum: Object.keys(userGender),
      default: userGender.male,
      trim: true,
    },
    provider: {
      type: String,
      required: true,
      enum: Object.keys(userProvider),
      default: userProvider.system,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: Object.keys(userRole),
      default: userRole.user,
      trim: true,
    },
    isConfirmed: Boolean,
    profilePic: {
      type: String,
    },
    changeCredentials: Date,
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);
userSchema.virtual("FullName").get(function () {
  return `${this.fname} ${this.lname}`;
});

const userModel = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default userModel;

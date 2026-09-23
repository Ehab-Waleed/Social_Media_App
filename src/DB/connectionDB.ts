import mongoose from "mongoose";
import { DB_URI } from "../config/config.service";
const DB_uri = DB_URI;

const connectionDB = async () => {
  await mongoose
    .connect(DB_uri)
    .then(() => {
      console.log(`DB Connected Successfully to ${DB_uri}`);
    })
    .catch((err) => {
      console.log("Failed To Connect DB", err);
    });
};

export default connectionDB;
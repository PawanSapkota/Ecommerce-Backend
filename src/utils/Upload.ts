import * as multer from "multer";
import { Request } from "express";
import AppError from "./AppError";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb) {
    cb(null, `src/public`);
  },
  filename: function (req: Request, file: Express.Multer.File, cb) {
    console.log(file.originalname, "ggdhfd");
    let fileExtension = file.originalname.split(".")[1];
    let milliSecond = Date.now();
    let newName = milliSecond + "." + fileExtension;
    cb(null, newName);
  },
});

export const Upload = multer({
  storage: storage,
});

import * as multer from "multer";
import {Request} from "express"
import AppError from "./AppError";

const storage =multer.diskStorage({
    destination:function(req:Request,file:Express.Multer.File,cb){
        cb(null,`src/public`)
    },
    filename:function(req:Request,file:Express.Multer.File,cb){
        console.log(file.originalname,"ggdhfd")
        let newName=file.originalname.split(".")
        console.log(newName[1],"array")
        let date = new Date().toDateString()
        console.log(date,"date")
        let name= Date.parse(date)+'.'+newName[1]
        console.log(name,"name")
        cb(null,name );
    }

    

})

export const Upload = multer({
    storage:storage,
    
})
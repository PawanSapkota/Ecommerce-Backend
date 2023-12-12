import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { Fashion } from "../entity/Fashion"

const fashionRepo =AppDataSource.getRepository(Fashion)

interface RequestCustom extends Request {
    files:any
}

// export const getFashion=async(req:Request,res:Response,next:NextFunction)=>{
//     try{
//         const Fashion =await fashionRepo.find({
//             order:{
//                 id:"ASC"
//             }
//         })
//         res.status(200).json({
//             message:"success",
//             Fashion
//         })
//     }
//     catch(err){
//         next(new AppError(err.statusCode,err.message))
//     }

// }

export const postFashion =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{
        const fashionImages =[];

        req.files.map((img:any)=>{
            fashionImages.push(img.filename)
        })
        req.body.image=fashionImages
        console.log(req.body,"fashion")

        await fashionRepo.save(req.body).then((result:any)=>{
            console.log("here fashion")
            res.status(200).json({
                message:"success",
                data:result
            })
        })       

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}


// export const deleteFashion =async(req:Request,res:Response,next:NextFunction)=>{
//     try{

//         const fashion = await fashionRepo.findOneBy({id:req.params.id})

//         if(!fashion){
//             return (next (new AppError(404,"Image with this id is not found.")))
//         }

//         await fashionRepo.remove(fashion).then((result)=>{
//             res.status(200).json({
//                 message:"succes",
//                 result
//             })
//         })
//     }
//     catch(error){
//         next(new AppError(error.statusCode,error.message))
//     }
// }
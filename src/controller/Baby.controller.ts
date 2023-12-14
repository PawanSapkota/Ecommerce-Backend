import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { Baby } from "../entity/Baby"


const babyRepo =AppDataSource.getRepository(Baby)

interface RequestCustom extends Request{
    files:any
}

export const getBaby=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const baby =await babyRepo.find({
            order:{
                id:"ASC"
            }
        })
        res.status(200).json({
            message:"success",
            baby
        })
    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postBaby =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{
        const babyImages = [];

        req.files.map((img:any)=>{
            babyImages.push(img.filename)
        })
        req.body.image = babyImages
        console.log(req.body,"baby")

        await babyRepo.save(req.body).then((result:any)=>{           
            res.status(200).json({
                message:"success",
                result
            })
        }).catch((err)=>{
            next (new AppError(err.statusCode,err.message))
        })       

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}


export const deleteBaby =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const baby = await babyRepo.findOneBy({id:req.params.id})

        if(!baby){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await babyRepo.remove(baby).then((result)=>{
            res.status(200).json({
                message:"succes",
                result
            })
        })
    }
    catch(error){
        next(new AppError(error.statusCode,error.message))
    }
}
import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { Kitchen } from "../entity/Kitchen"

const kitchenRepo =AppDataSource.getRepository(Kitchen)

interface RequestCustom extends Request {
    files:any
}

export const getKitchen=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const kitchen =await kitchenRepo.find({
            order:{
                id:"ASC"
            }
        })
        console.log(kitchen)

        res.status(200).json({
            message:"success",
            kitchen
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postKitchen =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const kitchenImages =[];

        req.files.map((img:any)=>{
            kitchenImages.push(img.filename)
        })
        req.body.image=kitchenImages
        console.log(req.body,"kitchen")

        await kitchenRepo.save(req.body).then((result:any)=>{
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


export const deleteKitchen =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const kitchen = await kitchenRepo.findOneBy({id:req.params.id})

        if(!kitchen){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await kitchenRepo.remove(kitchen).then((result)=>{
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
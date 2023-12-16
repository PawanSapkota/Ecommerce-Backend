import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { GamingAccessories } from "../entity/GamingAccessories"

const gamingRepo =AppDataSource.getRepository(GamingAccessories)

interface RequestCustom extends Request {
    files:any
}

export const getGaming=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const gaming =await gamingRepo.findOne({
            order:{
                id:"ASC"
            }
        })
        console.log(gaming)

        res.status(200).json({
            message:"success",
            gaming
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postGaming =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const gamingImages =[];

        req.files.map((img:any)=>{
            gamingImages.push(img.filename)
        })
        req.body.image=gamingImages
        console.log(req.body,"gaming")

        await gamingRepo.save(req.body).then((result:any)=>{
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





export const deleteGaming =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const gaming = await gamingRepo.findOneBy({id:req.params.id})

        if(!gaming){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await gamingRepo.remove(gaming).then((result)=>{
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
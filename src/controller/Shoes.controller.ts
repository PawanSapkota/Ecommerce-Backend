import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { Shoes } from "../entity/Shoes"

const shoesRepo =AppDataSource.getRepository(Shoes)

interface RequestCustom extends Request {
    files:any
}

export const getShoes=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const shoes =await shoesRepo.find({
            order:{
                id:"ASC"
            }
        })
        console.log(shoes)

        res.status(200).json({
            message:"success",
            shoes
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postShoes =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const shoesImages =[];

        req.files.map((img:any)=>{
            shoesImages.push(img.filename)
        })
        req.body.image=shoesImages
        console.log(req.body,"shoes")

        await shoesRepo.save(req.body).then((result:any)=>{
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


export const deleteShoes =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const shoes = await shoesRepo.findOneBy({id:req.params.id})

        if(!shoes){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await shoesRepo.remove(shoes).then((result)=>{
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
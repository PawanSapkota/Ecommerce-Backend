import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Furniture } from "../entity/Furniture";
import AppError from "../utils/AppError";

const furnitureRepo=AppDataSource.getRepository(Furniture)

interface RequestCustom extends Request{
    files:any
}

export const postFurniture =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const furnitureArray=[];

        req.files.map((img:any)=>{
            furnitureArray.push(img.filename)
        })
        req.body.image=furnitureArray
     console.log(req.body,"Furniture")

     await furnitureRepo.save(req.body).then((result:any)=>{
        res.status(200).json({
            message:"success",
            result
        })
     })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}

export const getFurniture=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const Furnitures =await furnitureRepo.find({
            order:{
                id:"ASC"
            }            
        })
        res.status(200).json({
            message:"success",
            Furnitures
        })
    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}

export const deleteFurniture=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const Furniture = await furnitureRepo.findOneBy({id:req.params.id})

        if(!Furniture){
            return(next (new AppError( 404,"Id with this credential not found.")))
        }

        await furnitureRepo.remove(Furniture).then((result)=>{
            res.status(200).json({
                message:"success",
                result
            })
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}
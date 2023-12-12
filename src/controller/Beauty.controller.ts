import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Beauty } from "../entity/Beauty";
import AppError from "../utils/AppError";

const beautyRepo =AppDataSource.getRepository(Beauty)

interface RequestCustom extends Request{
    files:any
}

export const postBeauty =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        const beautyArray=[];

        req.files.map((img:any)=>{
            beautyArray.push(img.filename)
        })
        req.body.image = beautyArray
        console.log(req.body,"beauty here")

        await beautyRepo.save(req.body).then((result)=>{
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

export const getBeauty =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const Beauty = await beautyRepo.find({
            order:{
                id:"ASC"
            }
        })
        res.status(200).json({
            message:"success",
            Beauty
        })

    }
    catch(err){
        next (new AppError(err.statusCode,err.message))
    }
}

export const deleteBeauty =async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const beauty = await beautyRepo.findOneBy({id:req.params.id})

         console.log(req.params.id,"params")
          if(!beauty){
            return (next (new AppError(404,"Id with this credential not found.")))
          }

          await beautyRepo.remove(beauty).then((result:any)=>{
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
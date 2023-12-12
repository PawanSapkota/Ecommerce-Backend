import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { PersonalCare } from "../entity/PersonalCare";
import AppError from "../utils/AppError";

interface RequestCustom extends Request{
    files:any
}

const personalCareRepo =AppDataSource.getRepository(PersonalCare)

export const getPersonalCare =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const PersonalCares = await personalCareRepo.find({
            order:{
                id:"ASC"
            }
        })
        res.status(200).json({
            message:"success",
            PersonalCares
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }
}

export const postPersonalCare =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{
        const personalCareArray =[]

        req.files.map((img:any)=>{
            personalCareArray.push(img.filename)
        })
        req.body.image =personalCareArray
        console.log(req.body,"here Personal Care")

        await personalCareRepo.save(req.body).then((result:any)=>{
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


export const deletePersonalCare=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const personalCare = await personalCareRepo.findOneBy({id:req.params.id})

        if(!personalCare){
            return(next(new AppError(404,"Image with this id not found.")))
        }

        await personalCareRepo.remove(personalCare).then((result:any)=>{
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
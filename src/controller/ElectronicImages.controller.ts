import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { ElectronicsImages } from "../entity/ElectronicImages"
import AppError from "../utils/AppError"

const ElectronicsImagesRepo =AppDataSource.getRepository(ElectronicsImages)

interface RequestCustom extends Request {
    files:any
}


console.log("demo")

export const getElectronicsImages=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const Electronics =await ElectronicsImagesRepo.find({
            order:{
                id:"ASC"
            }
        })
        console.log(Electronics)

        res.status(200).json({
            message:"success",
            Electronics
        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postElectronicsImages =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{

        console.log('electronics')

        console.log(req.body,req.files,"files")

        const images =[];

        req.files.map((img:any)=>{
            images.push(img.filename)
        })
        req.body.image=images
        console.log(req.body,"here")

        await ElectronicsImagesRepo.save(req.body).then((result:any)=>{
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


export const deleteElectronicsImages =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const electronicsImages = await ElectronicsImagesRepo.findOneBy({id:req.params.id})

        if(!electronicsImages){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await ElectronicsImagesRepo.remove(electronicsImages).then((result)=>{
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
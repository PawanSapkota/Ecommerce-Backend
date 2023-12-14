import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import AppError from "../utils/AppError"
import { Book } from "../entity/Book"



const bookRepo =AppDataSource.getRepository(Book)

interface RequestCustom extends Request{
    files:any
}

export const getBook=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const book =await bookRepo.find({
            order:{
                id:"ASC"
            }
        })
        res.status(200).json({
            message:"success",
            book
        })
    }
    catch(err){
        next(new AppError(err.statusCode,err.message))
    }

}

export const postBook =async(req:RequestCustom,res:Response,next:NextFunction)=>{
    try{
        const bookImages = [];

        req.files.map((img:any)=>{
            bookImages.push(img.filename)
        })
        req.body.image = bookImages
        console.log(req.body,"book")

        await bookRepo.save(req.body).then((result:any)=>{           
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


export const deleteBook =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const book = await bookRepo.findOneBy({id:req.params.id})

        if(!book){
            return (next (new AppError(404,"Image with this id is not found.")))
        }

        await bookRepo.remove(book).then((result)=>{
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
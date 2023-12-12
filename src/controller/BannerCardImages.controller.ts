import {Request,Response,NextFunction} from "express"
import { BannerCardImages } from "../entity/BannerCardImages";
import { AppDataSource } from "../data-source";
import AppError from "../utils/AppError";


const bannerCardImagesRepo = AppDataSource.getRepository(BannerCardImages)

interface Requestcustom extends Request{
    file:any,

   

}


console.log("fsdgh")
export const getBannerCardImages =async(req:Request,res:Response,next:NextFunction)=>{
   try{
    let Brand = await bannerCardImagesRepo.find({
        order:{
            id:"ASC"
        }

    })
    console.log(Brand)
    res.status(200).json({
        message:"success",
        Brand
    })
   }
   catch(err){
    next(new AppError(err.statusCode,err.messagee))
   }
}
console.log("sfdg")
export const postBannerCardImages = async(req:Requestcustom,res:Response,next:NextFunction)=>{
    try{

        console.log(req.file,"imagesdfg")
        req.body.image =req.file.filename

        await bannerCardImagesRepo.save(req.body).then((result)=>{
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

export const deleteBannerCardImages=async(req:Request,res:Response,next:NextFunction)=>{
    try{

        let BannerImages = await bannerCardImagesRepo.findOneBy({id:req.params.id})

        if(!BannerImages){
            return next(new AppError(404,"Image with this id not found."))
        }
        await bannerCardImagesRepo.remove(BannerImages).then((result)=>{
            res.status(200).json({
                message:"succes",
                result
            })

        })

    }
    catch(err){
        next(new AppError(err.statusCode,err.message))

    }
}
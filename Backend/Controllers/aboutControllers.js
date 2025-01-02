const createError = require("http-errors")
const { successResponse } = require("../middlewares/response")
const cloudinary = require("../Config/cloudinary");
const aboutModel = require("../Models/aboutModel");
const { cloudinaryDeleteSingel } = require("../Helper/cloudinaryHelper");

exports.sendAbout = async(req,res,next) => {
    try {
     const {clgAge,clgAbout,princlpalname,princlpalmsg} = req.body
     const princlpalimg = req.file
     if(!princlpalimg){
        throw createError(404,'img is required')
     }
  
     const AboutFind = await aboutModel.find()
     if(AboutFind.length > 0){
        await cloudinaryDeleteSingel(AboutFind[0].princlpal.img,'uss_about' , res);
        await aboutModel.deleteMany();  
      }

  const {secure_url} = await cloudinary.uploader.upload(princlpalimg.path, {
               resource_type: "image",
               folder: "uss_about",
             })
             .catch((error) => {
               console.log(error);
             });
      
             if(!secure_url){
                throw createError(404,'img not uplodade on cloudinary. please try again')
             }
             
    const data = await aboutModel.create({
        clgAge,
        clgAbout,
        princlpal:{img:secure_url,princlpalname,princlpalmsg}
     })

     successResponse(res,{
        statusCode:201,
        message:"Successfully Added",
        payload:data
     })
    } catch (error) {
        next(error)
    }
}

exports.getAbout = async(req,res,next) => {
    try {
     const aboutDetails = await aboutModel.find()
     if(!aboutDetails){
        throw createError(404,'about Details not found')
     }
     successResponse(res,{
        statusCode:200,
        message:"success",
        payload:aboutDetails
     })
    } catch (error) {
        next(error)
    }
}
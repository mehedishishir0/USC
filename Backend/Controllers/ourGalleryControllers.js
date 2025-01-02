const createError = require('http-errors')
const cloudinary = require("../Config/cloudinary");
const ourGalleryModel = require("../Models/ourGalleryModel");
const { successResponse } = require('../middlewares/response');
const { cloudinaryDeleteSingel } = require("../Helper/cloudinaryHelper");
exports.addedGallery = async (req, res, next) => {
  try {
    const galleryImg = req.file;
    
    if(!galleryImg){
        throw createError(404,'please upload  image')
    }

    const { secure_url } = await cloudinary.uploader
      .upload(galleryImg.path, {
        resource_type: "image",
        folder: "uss_gallery",
      })
      .catch((error) => {
        console.log(error);
      });

    if (!secure_url) {
      throw createError(
        404,
        "img not uplodade on cloudinary. please try again"
      );
    }

    const data = await ourGalleryModel.create({
     img:secure_url
    });

    successResponse(res, {
      statusCode: 201,
      message: "all details added",
      payload: data,
    });
  } catch (error) {
    next(error)
  }
};

exports.getGallery = async(req,res,next) => {
    try {
     const galleryImg = await ourGalleryModel.find()
     if(!galleryImg){
        throw createError(404,'gallery image not found')
     }
     successResponse(res,{
        statusCode:200,
        message:"success",
        payload:galleryImg
     })
    } catch (error) {
        next(error)
    }
}
exports.deleteGallery = async(req,res,next) => {
    try {
      const id = req.body.id
     
      if(!id){
        throw createError(404,'Please enter your id')
      }
     const galleryImg = await ourGalleryModel.findById(id)
     if(!galleryImg){
        throw createError(404,'gallery image not found')
     }
      await cloudinaryDeleteSingel(galleryImg.img,'uss_gallery',res);
      await ourGalleryModel.findByIdAndDelete(id)

     successResponse(res,{
        statusCode:200,
        message:"success",
        payload:galleryImg
     })
    } catch (error) {
        next(error)
    }
}

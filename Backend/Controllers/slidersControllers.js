const createError = require("http-errors");
const { successResponse } = require("../middlewares/response");
const cloudinary = require("../Config/cloudinary");
const sliderModel = require("../Models/sliderModel");
const { default: mongoose, MongooseError } = require("mongoose");
const { cloudinaryDelete } = require("../Helper/cloudinaryHelper");

exports.sendSlider = async (req, res, next) => {
  try {
    const imgs = req.files;
       if (imgs.length === 0) {
      throw createError(404, "please provide img");
    }
    const findData = await sliderModel.find();
    if(findData.length > 0){
      await cloudinaryDelete(findData[0].img, res);
      await sliderModel.deleteMany();  
    }
    const uploadPromises = imgs.map((file) => {
      return cloudinary.uploader
        .upload(file.path, {
          resource_type: "image",
          folder: "uss_slider",
        })
        .catch((error) => {
          console.log(error);
        });
    });

    // Wait for all uploads to complete
    const uploadResults = await Promise.all(uploadPromises);

    // Extract secure URLs from the upload results
    const allImg = uploadResults.map((result) => result.secure_url);

    // Save URLs to the database
    const data = await sliderModel.create({
      img: allImg,
    });

    successResponse(res, {
      statusCode: 201,
      message: "Successfully uploaded",
      payload: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSlider = async (req, res, next) => {
  try {
    const slideImg = await sliderModel.find();
if(!slideImg){
        throw createError(404,'slide image not found')
     }
    successResponse(res, {
      statusCode: 200,
      message: "success",
      payload: slideImg,
    });
  } catch (error) {
    next(error);
  }
};

const createError = require("http-errors");
const cloudinary = require("../Config/cloudinary");
const { errorResponse } = require("../middlewares/response");

exports.cloudinaryDelete = async (url, res) => {
  url.map(async (dataUrl) => {
    const pathSegment = dataUrl.split("/");
    const lastSegment = pathSegment[pathSegment.length - 1];
    const withoutexten = lastSegment.replace(".jpg", "");
    const { result } = await cloudinary.uploader.destroy(
      `uss_slider/${withoutexten}`
    );
    if (result !== "ok") {
      errorResponse(res, {
        statusCode: 404,
        message: "cloudinary image was not deleted. please try again",
      });
    }
  });
};
exports.cloudinaryDeleteSingel = async (url ,folderName, res) => {
      const pathSegment = url.split("/");
    const lastSegment = pathSegment[pathSegment.length - 1];
    const withoutexten = lastSegment.replace(".jpg", "");
    const { result } = await cloudinary.uploader.destroy(
      `${folderName}/${withoutexten}`
    );
    if (result !== "ok") {
      errorResponse(res, {
        statusCode: 404,
        message: "cloudinary image was not deleted. please try again",
      });
    }
};

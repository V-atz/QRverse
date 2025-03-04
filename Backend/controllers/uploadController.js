const cloudinary = require("../config/cloudinary");
// const File = require("../models/fileModel");
const multer = require('multer')
const fs = require('fs')

//temporary store files on disc
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = 'uploads/'

        //check if uploads folder exist, if not it creates
        if(!fs.existsSync(uploadPath)){
          fs.mkdir(uploadPath, {recursive: true})
        }
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage: storage})
exports.uploadFile = upload.single("file")

//uploading to cloudinary
exports.uploadFileToCloudinary = async (req, res) => {
  try {
    //no file uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
    });

    // const newFile = await File.create({
    //   fileUrl: result.secure_url,
    //   fileType: req.body.fileType, //img,vid,txt,audio,url
    // });

    //delete file from localstorage after uploading to cloudinary
    fs.unlinkSync(req.file.path)

    res
      .status(201)
      .json({
        message: "File uploaded successfully",
        fileUrl: result.secure_url,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
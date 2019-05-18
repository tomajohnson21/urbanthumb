const cloudinary = require("cloudinary");
const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});
    
const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "urbanthumb",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }]
});
    
const parser = multer({ storage: storage });

module.exports = parser;
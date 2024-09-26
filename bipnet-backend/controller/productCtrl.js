const Product = require("../models/productModel");
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbid");
const { cloudinaryUploadImg, cloudinaryDeleteImg } = require("../utils/cloudinary")
const fs = require("fs");

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
          req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
      } catch (error) {
        throw new Error(error);
      }
    });

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        if (req.body.title) {
        req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});
    
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deleteProduct = await Product.findOneAndDelete({ _id: id });
      res.json(deleteProduct);
    } catch (error) {
      throw new Error(error);
    }
  });

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
}); 

const getAllProduct = asyncHandler(async (req, res) => {
    try {
      // Filtering
      const queryObj = { ...req.query };
      const excludeFields = ["page", "sort", "limit", "fields"];
      excludeFields.forEach((el) => delete queryObj[el]);
      let queryStr = JSON.stringify(queryObj);
      queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  
      let query = Product.find(JSON.parse(queryStr));
  
      // Sorting
  
      if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
      } else {
        query = query.sort("-createdAt");
      }
  
      // limiting the fields
  
      if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
      } else {
        query = query.select("-__v");
      }
  
      // pagination
  
      const page = req.query.page;
      const limit = req.query.limit;
      const skip = (page - 1) * limit;
      query = query.skip(skip).limit(limit);
      if (req.query.page) {
        const productCount = await Product.countDocuments();
        if (skip >= productCount) throw new Error("This Page does not exists");
      }
      const product = await query;
      res.json(product);
    } catch (error) {
      throw new Error(error);
    }
  });

  const uploadImages = asyncHandler(async (req, res) => {
    try {
      const uploader = (path) => cloudinaryUploadImg(path, "images");
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newpath = await uploader(path);
        urls.push(newpath);
        
        try {
          fs.unlinkSync(path);
        } catch (err) {
          console.error(`Error deleting file: ${err}`);
        }
      };
      const images = urls.map((file) => {
        return file;
      });
      res.json(images);
    } catch (error) {
      throw new Error(error);
    } 
  });

  const deleteImages = asyncHandler(async (req, res) => {
    try {
      const deleted = (path) => cloudinaryDeleteImg(path, "images");
      res.json({ message: "Deleted" });
    } catch (error) {
      throw new Error(error);
    } 
  });

module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    uploadImages,
    deleteImages,
  };
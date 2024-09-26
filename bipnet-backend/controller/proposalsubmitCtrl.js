const Proposal = require("../models/proposalsubmitModel");
const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");
const validateMongoDbId = require("../utils/validateMongodbid");

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  },
});

// Configure multer
const upload = multer({ storage: storage });

const createProposal = asyncHandler(async (req, res) => {
  const { companyName, senderName, companyEmail, phoneNumber } = req.body;
  validateMongoDbId(id);

  if (!req.file) {
    res.status(400).json({ message: "File is required" });
    return;
  }

  const proposalData = {
    companyName,
    senderName,
    companyEmail,
    phoneNumber,
    proposalFile: req.file.path, // Path to the uploaded file
  };

  try {
    const newProposal = await Proposal.create(proposalData);
    res.json(newProposal);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteProposal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedProposal = await Proposal.findByIdAndDelete(id);
    res.json(deletedProposal);
  } catch (error) {
    throw new Error(error);
  }
});
const getProposal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaProposal = await Proposal.findById(id);
    res.json(getaProposal);
  } catch (error) {
    throw new Error(error);
  }
});
const getallProposal = asyncHandler(async (req, res) => {
  try {
    const getallProposal = await Proposal.find();
    res.json(getallProposal);
  } catch (error) {
    throw new Error(error);
  };
});

module.exports = { createProposal, upload, deleteProposal, getProposal, getallProposal };


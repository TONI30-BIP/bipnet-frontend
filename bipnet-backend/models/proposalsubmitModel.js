const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    proposalFile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Proposal", proposalSchema);

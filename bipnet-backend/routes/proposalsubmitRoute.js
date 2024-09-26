const express = require("express");
const { 
    createProposal, 
    upload,
    deleteProposal, 
    getProposal, 
    getallProposal 
} = require("../controller/proposalsubmitCtrl")
const {isAdmin, authMiddleware} = require("../middlewares/authMiddleware")
const router = express.Router();

router.post("/", upload.single("proposalFile"), createProposal);
router.get("/:id", getProposal);
router.delete("/:id",  authMiddleware, isAdmin, deleteProposal);
router.get("/", getallProposal);


module.exports = router;

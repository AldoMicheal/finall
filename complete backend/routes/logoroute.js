const express = require("express");
const multer = require("multer");
const router = express.Router();
const imageController = require("../controller/logocontroller");
const admin=require("../middleware/authmiddleware")

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
router.post("/uploadlogo", upload.single("image"), imageController.uploadImage);
// router.get("/image/:id", imageController.getImage);
router.get("/getall",imageController.getAllImages);

router.get("/logo/:id",imageController.getImage);
router.delete("/delete/:id",imageController.deleteImage);

module.exports = router;

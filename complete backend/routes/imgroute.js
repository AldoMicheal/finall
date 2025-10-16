const express = require("express");
const multer = require("multer");
const router = express.Router();
const imageController = require("../controller/imgcontroller");
const admin=require("../middleware/authmiddleware")

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes
router.post("/upload", upload.single("image"), imageController.uploadImage);
// router.get("/image/:id", imageController.getImage);
router.get("/images/getall",imageController.getAllImages);

router.get("/images/:id",imageController.getImage);
router.delete("/images/delete/:id",imageController.deleteImage);

module.exports = router;

const ImageModel = require("../models/logo")

// Upload new image
exports.uploadImage = async (req, res) => {
  try {
    const newImage = new ImageModel({
      name: req.body.name || "No-name",
      id: req.body.id, // numeric custom ID
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });
    await newImage.save();
    res.json({ message: "Logo uploaded successfully", id: newImage.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all images (only metadata, not full binary data)
// exports.getAllImages = async (req, res) => {
//   try {
//     const images = await ImageModel.find({}, { img: 0 }); // exclude heavy image data
//     res.json(images);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
exports.getAllImages = async (req, res) => {
  try {
    const images = await ImageModel.find({});
    const formatted = images.map(img => ({
      _id: img._id,
      id: img.id,
      name: img.name,
      image: `data:${img.img.contentType};base64,${img.img.data.toString("base64")}`
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get single image binary by id (if needed)
exports.getImage = async (req, res) => {
  try {
    const image = await ImageModel.findOne({ id: req.params.id });
    if (!image) return res.status(404).send("Logo not found");

    res.contentType(image.img.contentType);
    res.send(image.img.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete image by id
exports.deleteImage = async (req, res) => {
  try {
    const image = await ImageModel.findOneAndDelete({ id: req.params.id });
    if (!image) {
      return res.status(404).json({ message: "Logo not found" });
    }
    res.json({ message: "Logo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

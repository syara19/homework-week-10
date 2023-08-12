const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const MovieController = require("../controllers/moviesController");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.post("/", upload.single("image"), MovieController.create);
router.put("/:id", MovieController.update);
router.delete("/:id", MovieController.delete);

module.exports = router;

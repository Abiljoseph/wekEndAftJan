const express = require("express");
const { GetAllProducts } = require("../controllers/productsController");
const protect = require("../middlewares/protectMiddleware");

const router = express.Router();

router.get("/getAllProducts",protect,GetAllProducts)
router.post()

module.exports = router
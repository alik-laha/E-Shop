const Express = require("express");
const { getAllData, sendData } = require("../controller/productController.js")

const router = Express.Router();

//get all products from db
router.get('/', getAllData);

//send data
router.post("/send", sendData);

module.exports = router;
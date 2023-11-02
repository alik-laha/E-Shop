const PRODUCT = require("../models/Product");

exports.getAllData = async (req, res, next) => {
    try {
        const products = await PRODUCT.find({})
        res.status(200)
        res.send(products)
    } catch (error) {
        res.status(500).json({
            sucess: false,
            masage: "a error ocured while fatching data",
            error: error.message
        })

    }
}

exports.sendData = async (req, res, next) => {
    try {
        const artical = await PRODUCT.create(req.body)
        artical.save();
        res.status(201).json({
            sucess: "true",
            message: "data has been send"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "a error occure while sendimng",
            error: error.message
        })
    }
}
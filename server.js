//import dependencies
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const productRouter = require('./router/productRouter.js');
const cors =require("cors")
dotenv.config();
const app = express();
app.use(cors())
//database connection
connectDB();

app.use('/api/products', productRouter);
//middleware
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
})
const mongoose = require("mongoose");


const connectDb = async () => {
    try {
        const conect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database connected ${conect.connection.host}`);
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;
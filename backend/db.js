const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.CONNECTION_URL;

const mongoDB = () => {
    mongoose.connect(mongoURI, {}).then(async() => {
        console.log("Connected to Database");
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        global.food_items = data;

        const fetched_category = mongoose.connection.db.collection("foodCategory");
        const category = await fetched_category.find({}).toArray();
        global.foodCategory = category;
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = mongoDB;

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log('Connected!');
//         let fetched_data = mongoose.connection.db.collection("food_items");
//         let data = await fetched_data.find({}).toArray()
//         console.log(data);
//     } catch (error) {
//         console.log('err: ', error);
//     }
// };
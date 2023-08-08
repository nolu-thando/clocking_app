const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Employees")
.then(() => {
    console.log("mongo is connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
}
})
const collection = new mongoose.Model("Employee_Details", LoginSchema)

module.exports = collection
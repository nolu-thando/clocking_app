const express = require ("express")
const app = express()
const path = require ("path")
const hbs = require ("hbs")
//const async = require("hbs/lib/async")
const collection = require("./mongodb")

const templatePath = path.join(__dirname,'../templates')

app.use(express.json())
app.set("view engine","hbs")
app.set ("views",templatePath)

app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register", async(req,res) => {

    const data ={
        name:req.body.name,
        surname:req.body.syrname,
        email:req.body.email,
        password:req.body.password
    }
    await collection.insertMany([data])

    res.render("home")


})

app.listen(3000, () => {
    console.log ("port connected");
})
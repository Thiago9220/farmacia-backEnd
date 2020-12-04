const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const funcionarioRouter=require("../src/routs/funcionarios")

mongoose.connect(`mongodb+srv://Thiagodickzao:142536@cluster0.eaqd4.mongodb.net/FarmaciaDB?retryWrites=true&w=majority`,{ useNewUrlParser: true,       useUnifiedTopology: true,       useCreateIndex: true,       useFindAndModify: true})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/funcionarios",funcionarioRouter)


module.exports=app
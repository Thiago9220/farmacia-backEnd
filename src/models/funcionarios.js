const mongoose=require("mongoose")
const funcionarioSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nome:String,
    cpf:String,
    email:String,
    senha:String,
    telefone:String,
   
      
})
module.exports=mongoose.model("Funcionario", funcionarioSchema)


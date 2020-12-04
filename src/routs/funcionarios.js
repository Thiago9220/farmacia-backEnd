const express=require("express")
const Funcionario=require("../models/funcionarios")
const mongoose=require("mongoose")
const router=express.Router()


router.get("/:id",async function(req,res){
    const funcionario=await Funcionario.findById(req.params.id)
    return res.status(200).json(funcionario)

})

//Vou criar um funcionario

router.post("/",async function(req,res){
    const {nome,cpf,email,senha,telefone}=req.body
    const funcionario=new Funcionario({
        _id:new mongoose.Types.ObjectId(),nome,cpf,email,senha,telefone
    })
    await funcionario.save()
    return res.status(201).json(funcionario)
})

//Vou atualizar um funcionario

router.put("/:id", async function(req,res){
    const funcionario=await Funcionario.findById(req.params.id)
    if (!funcionario){
        return res.status(401).json({
            error:"Funcionario não encontrado"
        })
    }

    const {nome,cpf,email,senha,telefone}=req.body   
    await funcionario.updateOne({
        nome,cpf,email,senha,telefone
    })
    
    
    return res.status(200).json(funcionario)

})
//Vou deletar um funcionário

router.delete("/:id",async function(req,res){
    const funcionario=await Funcionario.findById(req.params.id)
    if (!funcionario){
        return res.status(401).json({
            error:"Funcionario não encontrado"
        })
    }

    await funcionario.deleteOne()

    return res.status(200).json(funcionario)
})

module.exports=router


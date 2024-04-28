const express = require("express");
const childdetail = require("../model/childdetail.js");
const errormiddleware = require("../authorization/error.js");

const newchild = async (req, res, next) => {
    const { name,age,gender,disease } = req.body;

    await childdetail.create({
        name,
        age,
        gender,
        disease,
        userdetail: req.user._id
    });

    res.status(200).json({
        success: true,
        message: "details added successfully"
    })
  
} 


const seechilddetail = async (req,res, next) => {

    const userid = req.user._id;
    

    const child = await childdetail.find({userdetail: userid});

    // if(!child){
    //     return res.status(404).json({
    //         success:false,
    //         message: "no child records"
    //     })
    // }
    
     if(!child) return next(new Error("child not found", 500))

    res.status(200).json({
        success: true,
        child
    })

}


const childfind  = async (req, res, next) => {
    const {name} =  req.body;

    const child = await childdetail.find({name: name})

    // if(child.length === 0){
    //     res.status(404).json({
    //         success:false,
    //         message: "oops no child found " 
    //     })
    // }

      if(child.length === 0) return next(new Error("no child found", 500));
   

    res.status(200).json({
        success: true,
        child
    })
}


const updatechild =  async (req, res, next) => {
    const { name,age,gender,disease} = req.body;
    
    const userid =  req.user._id;
    const childid = req.params.id;

    const findchild = await childdetail.findOne({_id:childid, userdetail:userid})

    if(!findchild){
        res.status(404).json({
            success:false,
            message: "child is not available"
        })
    }

    if(name){
        findchild.name = name;
    }

    if(age){
        findchild.age = age;
    }

    if(gender){
        findchild.gender = gender;
    }


    if(disease){
        findchild.disease = disease;
    }

    await findchild.save()

    res.status(200).json({
        success:true,
        message: "update successfully"
    })

}

const deletechild = async (req, res) => {

    const {name} = req.body;
    const { id } =  req.user;

    const findchild =  await childdetail.findOne({name: name, userdetail: id }) ;
    console.log(findchild);

    if(!findchild){
        res.status(500).json({
            success: false,
            message: "no child found"
        })
    }

    await findchild.deleteOne()

    res.status(200).json({
        success: true,
        message: "delete successfully"
    })
}

module.exports = {
    newchild,
    seechilddetail,
    childfind,
    updatechild,
    deletechild
}
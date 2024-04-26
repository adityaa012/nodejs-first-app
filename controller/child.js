const express = require("express");
const childdetail = require("../model/childdetail.js");
const userdetail = require("../model/userdetails.js");

const newchild = async (req, res) => {
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


const seechilddetail = async (req,res) => {

    const userid = req.user._id;
    

    const child = await childdetail.find({userdetail: userid});

    if(!child){
        return res.status(404).json({
            success:false,
            message: "no child records"
        })
    }
    

    res.status(200).json({
        success: true,
        child
    })

}


const childfind  = async (req, res) => {
    const {name} =  req.body;

    const child = await childdetail.find({name: name})

    if(!child){
        res.status(404).json({
            success:false,
            message: "oops no child found " 
        })
    }

    res.status(200).json({
        success: true,
        child
    })
}


const updatechild =  async (req, res) => {
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
        childdetail.name == name;
    }

    if(age){
        childdetail.age == age;
    }

    if(gender){
        childdetail.gender == gender;
    }

    if(disease){
        childdetail.disease == disease;
    }

    await findchild.save()

    res.status(200).json({
        success:true,
        message: "update successfully"
    })

}

module.exports = {
    newchild,
    seechilddetail,
    childfind,
    updatechild
}
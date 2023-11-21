const express=require('express')
const {UserModel}=require('../Model/User.model')
const {connection} =require('../config/db')
const userRoutes=express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRoutes.post('/add',async(req,res)=>{
    try {
    const { name,role ,email, phoneNumber } = req.body;
        const adddata=new UserModel({name,role,email,phoneNumber })
        await adddata.save()
        res.status(200).json({ msg: 'User created successfully' });
  
    } catch (error) {
        res.status(400).json({
            isError:true,
            msg:"Something went wrong !!!!",
            error:error
        });
    }
})

userRoutes.get('/get',async(req,res)=>{
  try {
      const data= await UserModel.find()
      res.status(200).json(data);
  } catch (error) {
      res.status(400).json({
          isError:true,
          msg:"Something went wrong !!!!",
          error:error
      });
  }
})

userRoutes.get('/get/:userId',async(req,res)=>{
    
  try {
      const userId = req.params.userId;
      const userdata = await UserModel.find({ userId });
  
      res.json(userdata);
} catch (error) {
  res.status(400).json({
      isError:true,
      msg:"Something went wrong !!!!",
      error:error
  });
}
})

userRoutes.delete('/delete/:userId',async(req,res)=>{
    
  try {
      const userId = req.params.userId;
      const userdata = await UserModel.findByIdAndDelete(userId);
  
      res.json(userdata);
} catch (error) {
  res.status(400).json({
      isError:true,
      msg:"Something went wrong !!!!",
      error:error
  });
}
})

userRoutes.put('/update/:userId',async(req,res)=>{
    
  try {
      const userId = req.params.userId;
      const data= req.body
      const userdata = await UserModel.findByIdAndUpdate(userId,data,{ new: true });
      res.json(userdata);
} catch (error) {
  res.status(400).json({
      isError:true,
      msg:"Something went wrong !!!",
      error:error
  });
}
})

module.exports={
    userRoutes

}

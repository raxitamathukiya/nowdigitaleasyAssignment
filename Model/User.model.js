const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{type:String,require:true},
    role:{type:String,require:true},    
    email:{type:String,require:true},
    phoneNumber:{type:Number,require:true}
})  
const UserModel=mongoose.model('Users',UserSchema)
module.exports={
    UserModel
}

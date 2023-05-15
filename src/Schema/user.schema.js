const { Mongoose, default: mongoose } =require("mongoose")

const userSchema=new mongoose.Schema({
       name:{
        type:String,
        required:true,

      },
      number:{
        type : String,
        required: true,
        unique: true,
      },
      email: {
          type : String,
          required: true,
          unique: true,
      },
      password: {
          type : String,
          required: true
      },
     
     

})


const User = mongoose.model("Myuser", userSchema);

module.exports = User;
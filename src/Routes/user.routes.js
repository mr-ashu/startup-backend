const express = require('express')
const Users = require('../Schema/user.schema');
const app = express.Router();
const  {v4:uuidv4} = require('uuid');
const multer = require('multer');
 
// const DIR = './uploads/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// }).single("image");


app.get('/', async (req, res) => {
	const u=await Users.find({})

    res.send(u)
	 
});

app.post("/login",  async (req, res) => {
    let {email,password}=req.body;
 
   try {
    let u = await Users.findOne({email,password})
   
    if(!u){
    return res.status(401).send("Authentication Failed")
    }
z
    res.send({
        token:`${u.email}_#_${u.password}`,user:u
})
   } catch (e) {
      res.status(404).send(e.message)
   }
})


app.post('/signup',  async (req, res) => {
 
      const {email} =req.body;

     try {
        let u = await Users.findOne({email})
          if(u){
            res.send("Email already register")
          }
          const user=await Users.create({...req.body});

          res.send([{token:`${user.email}_#_${user.password}`},{user}])
     } catch (error) {
         
         res.send(error.message)
     }
   
       
   
});

module.exports = app
 

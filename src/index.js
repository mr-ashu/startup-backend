require("dotenv").config()
const express =require("express")
const connect =require("./config/db")
const cors=require("cors")
const PORT =process.env.PORT || 3000
const app=express()
const userRouter=require("./Routes/user.routes")

app.use(express.json());
app.use(cors());

app.use("/users",userRouter)


app.listen(PORT, async()=>{
    await connect()
    console.log(`listing to http://localhost:${PORT}`);
})
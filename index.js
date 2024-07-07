const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());

// load config from env file
require("dotenv").config();
const PORT=process.env.PORT||4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const quesRoutes=require("./routes/Questions");
// mount the todo api routes
app.use("/api/v1",quesRoutes);

// server start
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);

}
)

// connect to database
const dbConnect=require("./config/database");
dbConnect();

// default route
// app.get("/",(req,res)=>{
//     res.send(`<h1>This is home page</h1>`)
// } )
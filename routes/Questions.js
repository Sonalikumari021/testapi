const express=require("express");
const router=express.Router();

// import contoller
const {createQues}=require("../controller/createQues");
const {getQues}=require("../controller/getQues");
// const {getTodoById}=require("../controller/getTodoById");

//define API routes
router.post("/createQues",createQues);
router.get("/getQues",getQues);
// router.get("/getTodo/:id",getTodoById);


module.exports=router;
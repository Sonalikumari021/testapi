//import the model

const ques=require("../models/Ques");

//route handler
exports.createQues=async(req,res)=>{

    try{
            // extract title and description from request body
            const {question,number,options,correctanswer}=req.body;

            // create a new todo obj and insert in db
            const response=await ques.create({question,number,options,correctanswer});

            // send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entry Created Successfully"
                }
            )
    }
    catch(err){
            console.error(err);
            console.log(err);
            res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:err.message,
            })
    }
}
// module.exports={createTodo};
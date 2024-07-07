//import the model

const ques=require("../models/Ques");

//route handler
exports.getQues=async(req,res)=>{

    try{
           //fetch all todo items from database
           const questions=await ques.find({});
           
          //reponse
          res.status(200)
          .json({
            success:true,
            data:questions,
            message:"entire Todo data is fetched"
          })
    }
    catch(err){
          console.error(err);
          res.status(500)
          .json({
            success:false,
            error:err.message,
            message:"server error"
          })
    }
}
// module.exports={createTodo};

// exports.getTodoById=async(req,res)=>{
//     try{
//         // extract todo item basis on id
//         const id=req.params.id;
//         const todo=await Todo.findById({_id:id});

//         // data for given id 
//         if(!todo){
//             return res.status(404).json({
//                 success:false,
//                 message:"No Data Found with given id",
//             })
//         }
//         // data for given id found
//         res.status(200).json({
//             success:true,
//             data:todo,
//             message:`Todo ${id} data successfully fetched`,
//         })
//     }
//     catch(err){
//         console.error(err);
//         res.status(500)
//         .json({
//           success:false,
//           error:err.message,
//           message:"server error"
//         })
//     }
// }
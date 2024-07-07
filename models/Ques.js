const mongoose=require("mongoose");


const quesSchema=new mongoose.Schema({

            question:{
                type:String,
                require:true,
                maxLength:200
            },
            number:{
                type:Number,
                require:true,
                maxLength:4
            },
            options:{
                type:Array,
                require:true,
                maxLength:5
            },
            correctanswer:{
                type:String,
                require:true,
                maxLength:200
            }
        }
);

module.exports=mongoose.model("ques",quesSchema);
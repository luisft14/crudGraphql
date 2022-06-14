const {Schema, model}= require("mongoose")

const cursoSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    teacher:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    topic:{
        type: String
    }
})
const courseC= model("Course",cursoSchema);
module.exports=courseC;
const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    name:{ type: String, required:true},
    email:{ type: String, required:true},
    password:{ type: String, required:true},
    role:{
        type:String ,
        enum :["user", "admin"],
        default:"user"
    }

})

const Person = mongoose.model("person",userSchema)
module.exports=Person
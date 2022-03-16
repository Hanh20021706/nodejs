import mongoose, {Schema} from "mongoose";
const userSchema = new Schema ({
    name : {
        type : String,
        minlength : 8,
        required : true
    },
    email : {
        type : String,
        trim : true,
        lowercase :true,
        unique : true,
        required : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : Number,
        required : true
    }
} ,{ timestamps : true});
export default mongoose.model('User' , userSchema); 
import mongoose, { Schema ,ObjectId} from "mongoose";

const productSchema = new Schema ({
    name : {
        type : String,
        minlength : 5,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    category : {
        type : ObjectId, 
        ref : "category"
        // ref (duong link)

    }

} , { timestamps : true});

export default mongoose.model('Product' , productSchema);

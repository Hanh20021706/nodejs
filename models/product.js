import mongoose, { Schema ,ObjectId} from "mongoose";

const productSchema = new Schema ({
    name : {
        type : String,
        required : true,
        index: true
    },
    price : {
        type : String,
        required : true
    },
    img: {
        type: String,
        
    },
    desc : {
        type : String,
        required : true
    },
    status: {
        type: Number,
        default: 0
    },
    category : {
        type : ObjectId, 
        ref : "category"
        // ref (duong link)

    }

} , { timestamps : true});
productSchema.index({'$**':'text'})

export default mongoose.model('Product' , productSchema);

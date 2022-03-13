
import mongoose from "mongoose";
// khởi tạo 1 model
const Product = mongoose.model('Product' , {name : String})

// api hiển thị danh sách sản phẩm
export const list =  async (req, res) => {
    try {
        const products = await new Product.find()
        res.json(products);
    } catch (error) {
        res.status(400).json({
            messages : "không tìm được danh sách sản phẩm!"
        })
    }
}
export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}

// api thêm sản phẩm

export const create  = async (req, res) => {
    try {
        // products.push(req.body);
        const product  = await new Product (req.body).save();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            messages : "không thêm được!"
        })
    }
    
}

export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
}
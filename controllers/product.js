
import Product from "../models/product";


// api thêm sản phẩm

export const create  = async (req, res) => {
    try {
        // products.push(req.body);
        const product  = await new Product (req.body).save();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            messages : "không tìm được danh sách"
        })
    }
    
}

// api hiển thị danh sách sản phẩm
export const list = async (req, res) => { 
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không hiển thị ra sản phẩm"
        })
    }
}
// api tìm kiếm sản phẩm 
export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
    
}
// api xóa sản phẩm

export const remove = async (req, res) => {
    const condition  = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json({
            messages : "da xoa thanh cong",
            data:product
        })
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
    // res.json(products.filter(item => item.id !== +req.params.id));
}
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
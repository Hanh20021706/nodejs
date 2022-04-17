
import Product from "../models/product";


// api thêm sản phẩm

export const create  = async (req, res) => {
    try {
        // products.push(req.body);
        console.log(req.body);
        const product  = await new Product(req.body).save();
        res.json(product);
        
    } catch (error) {
        res.status(400).json({
            messages : "không them dc san pham"
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
    const filter = {_id: req.params.id}
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
    // tra ve 1 danh sach khi minh da cap nhat
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
export const search = async (req, res) => {
    const keyWord = req.query.q 
    // console.log(keyWord);
    try {
        const product = await Product.find( { $text: { $search: keyWord } } );
        res.json(product);
    } catch (error) {
        console.log(error)
    }
}

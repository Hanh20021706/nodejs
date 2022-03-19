import Category from "../models/category";
import Product from "../models/product";
// api them category
export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save()
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

// api chi tiet danh muc 
export const read = async ( req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        
    }
}

//  hien thi danh sach 
export const list = async ( req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories)
    } catch (error) {
            
    }
}

// xoa danh muc 

export const remove = async (req, res) => {
    const condition = {_id: req.params.id};
    try {
        const category =  await Category.findOneAndDelete(condition).exec();
        res.json(category);
    } catch (error) {
        
    }
}

// update
export const update = async (req, res) => {
    const condition = {_id : req.params.id}
    const document = req.body ;
    const options = { new: true}
    try {
        const category = await Category.findOneAndUpdate(condition, document, options).exec();
        res.json(category)
    } catch (error) {
        
    }
}
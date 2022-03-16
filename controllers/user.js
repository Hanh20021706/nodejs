import User from "../models/user";

// list danh sách người dùng
export const list = async (req, res) => { 
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// api thêm người dùng

export const create  = async (req, res) => {
    try {
        // products.push(req.body);
        const user  = await new User (req.body).save();
        res.json(user);
        
    } catch (error) {
        res.status(400).json({
            messages : "không thêm được!"
        })
    }
    
}
// api thêm tìm 1 người dùng

export const read = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const user = await User.findOne(filter);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

// api deleta
export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const user = await User.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// api update
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const user = await User.findOneAndUpdate(condition, doc, option);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

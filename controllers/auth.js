import User from '../models/user';

export const signup = async (req, res) => {
    const { email, name, password} = req.body;
    try {
        const exitUser = await User.findOne({email}).exec();
        if(exitUser){
            res.json({
                message : "email da ton tai"
            })
        };
        const user = await new User({email, name, password}).save();
        res.json({
            user:{
                _id : user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
};
export const signin = async (req, res) => {
    const {email, name, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email khong ton tai"
            })

        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "sai mat khau"
            })
        }
        res.json({
            user:{
                _id : user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
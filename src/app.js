import express from "express";
import cors from "cors";
import morgan from "morgan";
import productRoute from "../routes/products";
import mongoose from "mongoose";


const app = express();
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",productRoute);

// connection database
mongoose.connect('mongodb://localhost:27017/we16309')
.then(() => console.log("ket noi thang cong"))
.catch((error) => console.log(error));


// connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("server is running port", PORT);
})
/**
 * npm i - g json-server : cai dat modules vao o he thong
 * npm i --save express : 
 * -khi su dung npm i mac dinh cai dat luon 
 * - bat buoc phai co module nay moi chay project 
 * dependencies : {"express" : 1.2.3}
 * npm i -- save-dev nodemon
 */
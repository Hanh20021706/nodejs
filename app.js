const http = require('http');
const express = require('express');

const app = express();

//middleware
const check = (req, res, next) => {
    const status = true; 
    if(status){
        console.log("hello bae")
    }else{
        console.log("log out now")
    }
}

app.get('/api/products' , check ,(req, res) => {
    const products =[
            {id: 1, name: "hanhbhph"},
             {id: 2, name: "hanh2"}
         ];
         res.json(products);
})


// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if(req.url === "/") {
//         res.setHeader('Content-Type' , "text/html");
//         res.write("<html> <body> <h1> Home Page </h1> </body> </html>")
//         res.end();
//     }else if(req.url === "/api/products"){
//         const products =[
//             {id: 1, name: "hanhbhph"},
//             {id: 2, name: "hanh2"}
//         ];
//         res.end(JSON.stringify(products));
//     }else{
//         console.log('gio tao van khong biet')
//     }
// });

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
const dotenv = require('dotenv');
const express = require("express");
const server = express();

dotenv.config({path:'./.env'});
require('./db/conn');


server.use(express.json());

server.use(require("./routes/adminRoutes"))

const PORT = process.env.PORT||5000;


server.get('/signin', (req,res) =>{
    res.send("Hello Login World from the server")

})
server.get('/signup', (req,res) =>{
    res.send("Hello Registration World from the server")

})

server.listen(PORT,()=>{
    console.log(`The app is running at port ${PORT}`)
})

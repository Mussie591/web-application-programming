const express = require("express");
const app = express();
const studentRouter =require("./router/studentRouter");

const cors = require("cors"); // Import the cors middleware

app.use(express.json());
app.use(cors());
app.use('/students', studentRouter);
app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong!');
});
app.listen(3000,()=>{
console.log("server is running on 3000");
});
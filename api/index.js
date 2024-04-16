import express from 'express';

const app = express();

app.get("/test",(req,res) => {
    res.send("test ok");
})

app.listen(4000 , () => {
    console.log("Server is running on port 4000");
})
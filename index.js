require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./api/users/user_router');

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        message: "success"
    });
});

app.use("/api/user",userRoute);

const port = process.env.PORT || 3000;
app.listen(process.env.APP_PORT,()=> console.log(`server started at \nhttp://localhost:${port}`));
require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json({
        message: "success"
    });
})
const port = process.env.PORT || 3000;
app.listen(process.env.APP_PORT,()=> console.log(`server started at \nhttp://localhost:${port}`));
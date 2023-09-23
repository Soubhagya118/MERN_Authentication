require('dotenv').config();
const express = require("express");
const app =express();
const cors= require('cors');
const bodyParser=require('body-parser');
const router=require('./router/routes')


const PORT='4008';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// app.get('/',()=>{

app.post('/register',router)
app.post('/login',router)

app.listen(PORT,()=>{
    console.log(`server start at- ${PORT}`)
})
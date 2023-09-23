const express = require("express");
const {userregister,loginController}=require('../controllers/userControllers');

const router =express.Router();


router.post("/register",userregister);
router.post('/login',loginController);


module.exports=router
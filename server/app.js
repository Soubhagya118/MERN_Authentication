require('dotenv').config();
const express = require("express");
const app =express();
const cors= require('cors');
const bodyParser=require('body-parser');
const router=require('./router/routes');
const User = require('./schema/userSchema');
// const twilio = require('twilio');
// const User = require('./schema/userSchema');

const accountSid = 'ACa2b9acf4fbec597560d94fe9c6b04250';
const authToken = 'ba1cd8d446d79338e25d9c19972b52d5';

const client = require('twilio')(accountSid, authToken);


function generateOTP() {
    var a = Math.floor(100000 + Math.random() * 900000);   
    a = String(a);
    a = a.substring(0,4);
    return a;
  }



const PORT='4008';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/register',router)
app.post('/login',router);

let findOtp;


app.post('/sendotp',async (req, res) => {
    const { phone } = req.body;
    const otp = generateOTP();
  console.log("otp", otp)
// try{
//   await User.findOneAndUpdate({ phone }, { otp }, { upsert: true });
await User.findOneAndUpdate({ phone }, { otp }, { upsert: true });
findOtp=otp;

  client.messages
    .create({
        body: `Your OTP is - ${otp}`,
        from: '+17854533254',
        to: phone
    })
    .then(message => 
        {
   return res.status(200).json({message:"OTP sent",message})
        }
        )
    .catch(err=>res.status(400).json({error:"Faild to send "}));
    
     });

     app.post('/verifyotp',async(req,res)=>{
        const {phone,otp}=req.body;
        
        try{
            const find=await User.findOne({phone:phone});
            console.log("find verify otp",findOtp);
            if(find){
                if(findOtp==otp){
                    res.status(200).json({message:"Verified OTP"});
                }
            }
        }catch(err){
            res.status(400).json({error:"faild to verify"})
        }
     })
    

app.listen(PORT,()=>{
   
    console.log(`server start at- ${PORT}`)
})
const User = require('../schema/userSchema');
const twilio = require('twilio');


const accountSid = 'ACa2b9acf4fbec597560d94fe9c6b04250';
const authToken = 'ba1cd8d446d79338e25d9c19972b52d5';

const client = new twilio(accountSid, authToken);


const userregister = async(req,res)=>{


    const {userName,phone} = req.body;

    try{
const p = await User.findOne({phone:phone});
console.log("p",p);
if(p){
   return res.status(400).json({error:"This user already register in our database"})
}else{
    const newUser= new User(
            {
                userName,
                phone
            }
          );
          await newUser.save();
          return res.status(201).json({message:"User Registered Successfully"});
}


    }catch(error){
return res.status(400).json({error:"Invalid Details",error})
    }


};


const loginController= async(req,res)=>{

    const {phone}=req.body;

    try{
        console.log("findMob",req.body)

        const findMob= await User.findOne({phone:phone});
        console.log("findMob2",findMob)

        if(findMob){
                console.log("findMob",findMob)
            return res.status(200).json({message:"User Loggin Successfully"});

        }else{
            return res.status(400).json({error:"This Mobile Number is not Registered"});

        }
    }catch(error){

        return res.status(400).json({error:"Invalid Details",error})

    }
};


// const sendOtp = async (req, res) => {
//     const { phone } = req.body;
//     const otp = generateOTP();
//   console.log("otp", otp)

//     client.messages
//       .create({
//         body: `Your OTP is: ${otp}`,
//         from: '+919348418557', // Replace with your Twilio phone number
//         to: phone,
//       })
//       .then(() => {
//         console.log("res",res)
//         res.status(200).json({ message: 'OTP sent successfully' });
//       })
//       .catch((error) => {
//         console.log("err",error)
//          res.status(400).json({ error: error.message });
//       });
//   };

 
module.exports ={
    userregister,loginController
}
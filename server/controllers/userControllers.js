const User = require('../schema/userSchema');

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
}


module.exports ={
    userregister,loginController
}
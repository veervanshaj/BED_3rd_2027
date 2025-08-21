const Users=require("../model/user.js")

module.exports.postaddUser=async (req,res)=>{
    let {Name,email,password} =req.body;
    let newUser=new Users({
        Name:Name,
        email:email,
        password:password
    })
  await newUser.save();
  res.json({
    success:true,
    data:newUser,
    message:"user added successfully"
  })
}

module.exports.getReadUsers= async(req,res)=>{
    let allUsers=await Users.find();
    res.json({
        success:true,
        data:allUsers,
        message:"user added successfully"
    })
}

module.exports.getOneUser= async(req,res)=>{

  let {id}=req.params;
    let userExist= await Users.findOne({_id:id}).populate("blogs");
    if(userExist){
    res.json({
        success:true,
        data:user
    })
    }
}
const Blogs=require("../model/blogs.js")

module.exports.postaddBlog=async (req,res)=>{
    let {title,body,userId} =req.body;
    let userExist= await Users.findById(userId); 
    // let userExist= await Users; 
    if(userExist){
    let newBlog=new Blogs({
        title:title,
        body:body,
        data:Date.now(),
        userId:userId
    })

  await newBlog.save();
  userExist.blogs.push(newBlog._id)
  await userExist.save();
  res.json({
    success:true,
    data:newBlog,
    message:"blog added successfully"
  })
 }
}


module.exports.getreadBlog= async(req,res)=>{
    let allblog=await Blogs.find();
    res.json({
        success:true,
        data:allblog,
        message:"blog added successfully"
    })
}


module.exports.getOneBlog=async (req,res)=>{
    let {id}=req.params;
    let blog= await Blogs.findOne({_id:id})
    res.json({
        success:true,
        data:blog
    })
}

module.exports.deleteOneBlog= async (req,res)=>{
    let {blogId}=req.params;
    let {userId}= req.body;
    let blogExist= await Blogs.findById(blogId);
    if(!blogExist) return res.json({
        success:false,
        message:"Blog does not exist"
        
    })

    if(blogExist.userId!=userId) return res.json({
         success:false,
        message:"not allowedt"
    })
    await Blogs.findByIdAndDelete(blogId);

    let userExist = await Users.findById(userId);
    let blog=userExist.blogs.filter((id)=> id!=blogId)
    userExist.blogs=blog
    await userExist.save();
    res.json({
        success:true,
        message:"blog deleted successfully",
        data:userExist
    })
}



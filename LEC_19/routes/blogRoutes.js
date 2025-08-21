const express =require("express");
const router= express.Router() //small -->app

const Blogs=require("../model/blogs.js")
const {postaddBlog,getreadBlog,getOneBlog,deleteOneBlog}=require("../controller/blogController.js")

router.post("/",postaddBlog )

router.get("/",getreadBlog)

router.get("/:id",getOneBlog)


//delete blog
router.delete("/:blogId",deleteOneBlog)

//update
router.put("/blogs/:blogId", async (req,res)=>{
    let {blogId}=req.params;
    console.log(blogId);
    let {title,body,userId}= req.body;
    let blogExist= await Blogs.findById(blogId);
    console.log(blogId);
    if(!blogExist) return res.json({
        success:false,
        message:"Blog does not exist"
        
    })

    if(blogExist.userId!=userId) return res.json({
         success:false,
        message:"not allowedt"
    })

        

        await blogExist.save();
    res.json({
        success:true,
        message:"blog updated successfully",
        data:blogExist
    })

})

module.exports=router
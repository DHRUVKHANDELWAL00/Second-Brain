import express from 'express';
import {Response,NextFunction,Request} from 'express'
import jwt from "jsonwebtoken";
const app=express();
import { JWT_PASSWORD } from './config';
import { ContentModel, LinkModel, UserModel } from './db';
import { userMiddleware } from './middleware';
import { random } from './utils';
app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send('hi')
})
app.post('/api/v1/signup',async(req:Request,res:Response)=>{
    const {username,password}=req.body;
    console.log({username,password});
    await UserModel.create({username,password})
    res.json({
        message:'User created successfully'
    })
})
app.post('/api/v1/signin',async(req:Request,res:Response)=>{
    const { username, password } = req.body;

const findUser = await UserModel.findOne({ username, password });
if (findUser) {
    const token = jwt.sign(
        { id: findUser._id },
        JWT_PASSWORD
    );

    console.log('Generated Token:', token); // Logs the token
    console.log('Authorization Header (should be missing):', req.headers['authorization']); // Logs undefined

    res.json({
        message: "Signed in successfully",
        token,
    });
} else {
    res.status(403).json({
        message: "Invalid username or password",
    });
}
})
app.post('/api/v1/createcontent',userMiddleware,async(req:Request,res:Response)=>{
    console.log("hi1")
    const {link,title,type}=req.body;
    //@ts-ignore
    console.log({link,title,type,id:req.userId})
    await ContentModel.create({
        link,
        title,
        type,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json({
        message:"Content added"
    })

})
app.get('/api/v1/getAllContent',userMiddleware,async(req:Request,res:Response)=>{
    //@ts-ignore
    const userId=req.userId;
    const content=await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })
})
app.delete('/api/v1/content',async(req:Request,res:Response)=>{
    const {contentId}=req.body;
    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        message:"Content Deleted Successfully"
    })
})
app.post('/api/v1/brain/share',userMiddleware,async(req:Request,res:Response)=>{
    const {share}=req.body
     
    if(share){
        const exist=await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })
        if(exist){
            res.json({
                hash:exist.hash
            })
            return;
        }
        const hash=random(10)
        await LinkModel.create({
            //@ts-ignore
            userId:req.userId,
            hash:hash
        })
        res.json({
            message:"Link generated",
            hash:hash

        })
    }else{
        await LinkModel.deleteOne({
            //@ts-ignore
            userId:req.userId
        })
        res.json({
            message:"Link deleted successfully"
        })
    }
})
app.get('/api/v1/brain/:shareLink',async(req:Request,res:Response)=>{
    const shareLink=req.params.shareLink;
    const link=await LinkModel.findOne({
        hash:shareLink
    })
    console.log(link)
    if(!link){
        res.json({
            message:"Incorrect ShareLink"
        })
        return;
    }
    const userId=link.userId;

    const content=await ContentModel.find({
        userId:userId
    })
    
    res.json({
        // username:user?.username,
        content
    })
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})
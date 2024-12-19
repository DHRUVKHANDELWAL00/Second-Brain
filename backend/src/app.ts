import express from 'express';
import {Response,NextFunction,Request} from 'express'
import jwt from "jsonwebtoken";
const app=express();
import { JWT_PASSWORD } from './config';
import { ContentModel, UserModel } from './db';
import { userMiddleware } from './middleware';
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
    const {username,password}=req.body;
    // console.log(req.body)
    // console.log({username,password});
    const findUser=await UserModel.findOne({username,password})
    if(findUser){
        const token=jwt.sign({
            id:findUser._id
        },JWT_PASSWORD)
        console.log('hi'+req.headers['authorization'])
        res.json({
            message:"Signed in successfully",
            token
        })
    }else{
        res.status(403).json({
            message:"Invalid username or password"
        })
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
    console.log("hi2")
    res.json({
        message:"Content added"
    })

})
app.get('/api/v1/getAllContent',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.delete('/api/v1/content',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.post('/api/v1/brain/share',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.get('/api/v1/brain/:shareLink',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})
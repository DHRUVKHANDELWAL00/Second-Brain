import express from 'express';
import {Response,NextFunction,Request} from 'express'
const app=express();

app.get("/",(req:Request,res:Response)=>{
    res.send('hi')
})
app.post('/api/v1/signup',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.post('/api/v1/signin',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
})
app.post('/api/v1/createcontent',(req:Request,res:Response)=>{
    const {name,password}=req.body;
    console.log({name,password});
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
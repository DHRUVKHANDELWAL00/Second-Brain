//create models

import mongoose, {model,Schema, Types} from 'mongoose';
mongoose.connect("mongodb://localhost:27017/brainly")
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
                required:true
    },
    password:{
        type:String,
                required:true
    }
})

export const UserModel=model("User",UserSchema)
const contentTypes=['image','video','article','audio','tweet']
const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { type: Types.ObjectId, ref: 'User', required: true },
});
export const ContentModel=model("Content",contentSchema)
import mongoose , {Schema , Document, Types} from "mongoose";

export interface Messages extends Document{
    content:string;
    createdAt:Date;
}


const messageSchema:Schema<Messages> = new Schema({
    content:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true,
    }
})


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:number;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    messages:(Types.ObjectId| Messages)[];
}

const userSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true ,"Username is required"],
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:true,
        trim:true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,"Email is Invalid"]
    },
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    verifyCode:{
        type:Number,
        required:[true, "verifyCode is required"]
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "verifyExpiry is required"],
        default:Date.now
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    messages: {
        type: [{ type: Schema.Types.ObjectId, ref: "Message" }],
        default: [],
      },      
},{timestamps:true})


const UserModel = (mongoose.models.Users as mongoose.Model<User> ) || (mongoose.model<User>("User",userSchema))
const MessageModel = (mongoose.models.Messages as mongoose.Model<Messages> ) || (mongoose.model<Messages>("Message",messageSchema))

export {
    UserModel,
    MessageModel
}
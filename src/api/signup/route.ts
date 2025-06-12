import dbConnect from "@/lib/dbConnect";
import { UserModel } from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificatioinEmail } from "@/helpers/sendVerificationEmail";
import { ApiResponse } from "@/types/apiResponse";
import { success } from "zod/v4";

export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, email, password } = await request.json()

        const existingUsernameWhileRegistering = await UserModel.findOne({username
        }).select("._id isVerified")

        if (existingUsernameWhileRegistering) {
            if (existingUsernameWhileRegistering.isVerified) {
                return Response.json(
                    { status: false, message: "User already Verfied" }
                )
            }else{
                existingUsernameWhileRegistering.password = password,
                existingUsernameWhileRegistering.isVerified = true,
                await existingUsernameWhileRegistering.save({validateBeforeSave:false})
            }
            return Response.json(
                { status: false, message: "User already exists but not verified" }
            )
        }else{
            if (password.length() < 6) {
                Response.json(
                    { status: false, message: "Password length Should be atleast 6" }
                )
            }
    
            const verifyCode = Math.ceil(10000 + Math.random() * 90000) //Responsible for generating verification codes.
            const expiryCode = new Date()
            expiryCode.setHours(Date.now() + 1)
    
            const newUser = new UserModel({
                username,
                email,
                password,
                verifyCode,
                verifyCodeExpiry: expiryCode,
                isVerified: true,
                isAcceptingMessage: false,
            })
    
            await newUser.save()
        }

        

        return Response.json(
            { success: true, message: "User Signed Up Successfully" }, {
            status: 500
        }
        )
    } catch (error) {
        console.log("Error at Sign Up User", error)
        return Response.json(
            { success: false, message: "Failed to sign up user" },
            {
                status: 500
            }
        )
    }
}
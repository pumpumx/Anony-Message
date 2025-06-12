import { emailVerify } from "@/types/emailVerify";
import { Response } from "@/types/apiResponse";
import dbConnect from "@/lib/dbConnect";

async function POST(request: Request): Promise<Response> {
    await dbConnect()
    try {
        const {username , email , verifyCode} = await request
    } catch (error) {
        
    }

}
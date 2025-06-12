import { resend } from "@/lib/resend";
import VerifyEmail from "../../email/verificationEmail";
import { ApiResponse } from "@/types/apiResponse";
import { emailVerify } from "@/types/emailVerify";
export async function sendVerificatioinEmail(
    {email,
    username,
    otp}:emailVerify
):Promise<ApiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Email Verification',
            react: VerifyEmail({username,otp}),
          });
            return {success:true , message:"Email sent successfully"}
    } catch (EmailError) {
        console.log('Error sending email' , EmailError)
        return {success:false , message:"Failed to send verification email"}
    }
}

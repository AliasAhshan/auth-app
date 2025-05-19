
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        })
        
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
        })
        // Clear the cookie by setting its value to an empty string and its expiration date to a past date
        return response;

        
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
        
    }
}
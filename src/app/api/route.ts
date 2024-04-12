import { NextResponse } from "next/server";

export async function GET() {
    
    console.log("calling api...");
    
    return NextResponse.json({
        message: "Hello world!"
    })
}
import { connectDB } from "@/lib/mongodb"; 
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    
    return NextResponse.json(
      {
        success: true,
        message: "DB berhasil terhubung",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    
    return NextResponse.json(
      {
        success: false,
        message: "DB gagal terhubung",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
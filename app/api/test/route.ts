import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return new NextResponse("Your data");
  } catch (err: any) {
    console.log(err.message);
  }
}

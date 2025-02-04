import { connectDB, getConnect } from "@/util/database";
import { NextRequest, NextResponse } from "next/server";

// DB Connect
const db = await getConnect("forum", "post");


// GET 요청 핸들러
export async function GET(req: NextRequest) {
    return NextResponse.json("GET", { status: 200 });
}

// POST 요청 핸들러
export async function POST(req: NextRequest) {

    // Object 형태로 데이터를 보냈을 때
    // const body = req.json();

     // form 태그를 사용하여 데이터를 보냈을 때
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");

    db.insertOne({ title, content });

    return NextResponse.json("POST", { status: 200 });
}

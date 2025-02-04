import { getConnect } from "@/util/database";
import { NextRequest, NextResponse } from "next/server";

// DB Connect
const db = await getConnect("forum", "post");

// GET 요청 핸들러
export async function GET(req: NextRequest) {
    return NextResponse.json("GET", { status: 200 });
}

// POST 요청 핸들러
export async function POST(req: NextRequest) {

    // form 태그를 사용하여 데이터를 보냈을 때
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");

    if(title === "") return NextResponse.json("제목을 입력하세요.");
    if(content === "") return NextResponse.json("내용을 입력하세요.");

    try {
        // insertOne : MongoDB document insert function
        db.insertOne({ title, content });
        return NextResponse.redirect("/board", { status: 200 });
    } catch(err) {
        return NextResponse.json("오류가 발생했습니다.", { status: 500 });
    }
    

    
}

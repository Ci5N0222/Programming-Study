import { getConnect } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

// DB Connect
const db = await getConnect("forum", "post");

// GET 요청 핸들러
export async function GET(req :NextRequest) {
    return NextResponse.json("GET", { status: 200 });
}

// POST 요청 핸들러
export async function POST(req :NextRequest) {

    let result = {
        result : "fail",
        msg : "error",
        values : {}
    }

    // form 태그를 사용하여 데이터를 보냈을 때
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");

    if(title === "") return NextResponse.json("제목을 입력하세요.");
    if(content === "") return NextResponse.json("내용을 입력하세요.");

    try {
        // insertOne : MongoDB document insert function
        db.insertOne({ title, content });

        result.result = "ok";
        result.msg = "success";
        return NextResponse.json(result, { status: 200 });

    } catch(e) {
        return NextResponse.json(result , { status: 500 });
    }
}

export async function PUT(req :NextRequest) {

    let result = {
        result : "fail",
        msg : "error",
        values : {}
    }

    try {
        
        return NextResponse.json(result, { status: 200 });
        
    } catch(e) {
        return NextResponse.json(result, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const body = await req.json();
    console.log("req ===== ", body);
    try {
        db.deleteOne({ _id : new ObjectId(body._id) });
        return NextResponse.json({ message: "삭제 성공" }, { status: 200 });
        
    } catch(e) {
        return NextResponse.json({ message: "삭제 실패" }, { status: 500 });
    }
    
}

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

    const formData = await req.formData();
    const _id = formData.get("_id");
    if(typeof _id !== "string") return NextResponse.json(result, { status: 404 });;

    const title = formData.get("title");
    const content = formData.get("content");
    const objectId = new ObjectId(_id);

    if(title === "") return NextResponse.json("제목을 입력하세요.");
    if(content === "") return NextResponse.json("내용을 입력하세요.");

    try {
        const parameter = { title, content }
        await db.updateOne({ _id : objectId }, {$set : parameter});

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

import { addComment, getTitleById } from "@/lib/data";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async (req: Request) => {
  try {
    const titleId = req.url.split("titles/comments/")[1];
    const title = getTitleById(titleId);
    return NextResponse.json({ message: "OK", title }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { text, titleId } = await req.json();
    const comment: { text: string; id: string } = { text: text, id: uuidv4() };
    addComment(comment, titleId);
    const comments = getTitleById(titleId)?.comments;
    return NextResponse.json({ message: "OK", comments }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

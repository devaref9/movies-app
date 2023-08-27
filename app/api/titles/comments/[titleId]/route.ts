import { addComment, getTitleById } from "@/lib/data";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prismaDb";

export const GET = async (req: Request) => {
  try {
    const titleId = req.url.split("titles/comments/")[1].toString();
    const comments = await prisma.comment.findMany({
      where: {
        titleId,
      },
    });
    // console.log(comments);
    
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "ERROR", err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { text, titleId } = await req.json();
    // const comment: { text: string; id: string } = { text: text, id: uuidv4() };
    const comment = await prisma.comment.create({
      data: {
        text,
        titleId,
      },
    });
    // addComment(comment, titleId);
    // const comments = getTitleById(titleId)?.comments;
    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

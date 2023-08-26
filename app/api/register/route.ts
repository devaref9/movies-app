import bcrypt from "bcrypt";
import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  const { username: name, email, password } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json("Missing Fields", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return NextResponse.json("Email already exists!", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user, { status: 200 });
};

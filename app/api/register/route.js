import { User } from "@/models/User";
import { dbConnect } from "@/services/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashed,
      provider: "credentials",
    });

    return NextResponse.json({ message: "User registered", user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

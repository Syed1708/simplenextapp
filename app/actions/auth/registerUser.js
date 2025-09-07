"use server"

import { User } from "@/models/User"
import { dbConnect } from "@/services/dbConnect"
import bcrypt from "bcryptjs"

export const registerUser = async (payload) => {
  await dbConnect()

  const { name, email, password } = payload

  // validation
  if (!name || !email || !password) {
    throw new Error("All fields are required")
  }

  // check if user already exists
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error("User already exists")
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // create user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  return {
    id: newUser._id.toString(),
    name: newUser.name,
    email: newUser.email,
  }
}

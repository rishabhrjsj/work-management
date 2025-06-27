import { NextResponse } from "next/server";
const { DbConnection } = require("@/app/helper/db");
const { User } = require("../../../models/user");
DbConnection();

const newUser = new User({
  name: "Rishabh Jaiswal",
  email: "example2@gmail.com",
  password: "12345",
  about: "thids is rishabh",
});
await newUser.save();
console.log("new user created");
// app/api/users/route.js
export async function GET() {
  return NextResponse.json({ message: "Hello from GET!" });
}

export async function POST() {
  return NextResponse.json({ message: "Hello from POST!" });
}

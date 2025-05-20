import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";
import { connect } from "@/dbconfig/dbconfig";

connect();

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await sendEmail({ email, emailType: "RESET", userId: user._id });

  return NextResponse.json({
    message: "Password reset email sent",
    success: true,
  });
}

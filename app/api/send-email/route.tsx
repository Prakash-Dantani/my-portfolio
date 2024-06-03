import EmailTemplate from "../../components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  const rs = await resend.emails.send({
    from: "pk90890@gmail.com",
    to: "dantaniprakash08@gmail.com",
    subject: "Welcome Email",
    react: <EmailTemplate name="Prakash Dantani" />,
  });
  return NextResponse.json(rs);
}

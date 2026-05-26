import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("[CONTACT SUBMISSION]", body);

    // Here you would insert into Supabase or email the lead
    // const { data, error } = await supabase.from("contacts").insert([body]);

    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error("[CONTACT ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

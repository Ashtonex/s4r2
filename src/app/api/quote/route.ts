import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log to console in dev
    console.log("[QUOTE SUBMISSION]", body);

    // Here you would insert into Supabase or email the lead
    // const { data, error } = await supabase.from("quotes").insert([body]);

    return NextResponse.json({
      success: true,
      message: "Quote request received. We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("[QUOTE ERROR]", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

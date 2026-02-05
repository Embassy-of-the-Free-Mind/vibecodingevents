import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const FEEDBACK_FILE = path.join(process.cwd(), "feedback.json");

export async function GET() {
  try {
    if (!existsSync(FEEDBACK_FILE)) {
      return NextResponse.json([]);
    }
    const data = await readFile(FEEDBACK_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (e) {
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const item = await request.json();

    let feedback: unknown[] = [];
    if (existsSync(FEEDBACK_FILE)) {
      const data = await readFile(FEEDBACK_FILE, "utf-8");
      feedback = JSON.parse(data);
    }

    feedback.push(item);

    await writeFile(FEEDBACK_FILE, JSON.stringify(feedback, null, 2));

    return NextResponse.json({ success: true, count: feedback.length });
  } catch (e) {
    console.error("Failed to save feedback:", e);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await writeFile(FEEDBACK_FILE, "[]");
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Failed to clear" }, { status: 500 });
  }
}

// app/api/time/route.ts
import { NextResponse } from "next/server";

// ISR revalidate 1s
export const revalidate = 10;

export async function GET() {
  const data = { time: new Date().toISOString() };
  return NextResponse.json(data);
}

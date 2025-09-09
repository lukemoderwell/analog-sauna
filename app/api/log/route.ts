import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { event } = await req.json()
  console.log(`[analytics] ${event}`)
  return NextResponse.json({ success: true })
}

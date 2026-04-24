import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'FOODAGRISUMMIT Dashboard Next.js API running' });
}


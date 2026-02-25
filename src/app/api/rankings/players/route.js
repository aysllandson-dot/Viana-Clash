import { NextResponse } from 'next/server';
import { MOCK_PLAYERS } from '@/lib/mockData';

export async function GET() {
    return NextResponse.json(MOCK_PLAYERS);
}

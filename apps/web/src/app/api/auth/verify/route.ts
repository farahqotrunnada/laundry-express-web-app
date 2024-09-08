import { NextResponse } from 'next/server';
import { User } from '@/types/user';
import jwt from 'jsonwebtoken';

export async function GET(request: Request, response: Response) {
  const { token, allowed } = await request.json();

  const payload = jwt.verify(token, process.env.NEXT_PRIVATE_JWT_SECRET as string) as User;
  if (!payload) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

  if (allowed.includes(payload.role as string)) return NextResponse.json({ message: 'Authorized' });
  return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
}

import { NextRequest, NextResponse } from 'next/server';

const SKIP = ['/admin', '/api', '/_next', '/favicon', '/icon', '/og-image', '/logo'];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Skip non-page routes and static assets
  if (SKIP.some(p => path.startsWith(p)) || path.includes('.')) {
    return NextResponse.next();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    const country = req.headers.get('x-vercel-ip-country') || 'XX';

    // Fire and forget — does not block the page response
    fetch(`${supabaseUrl}/rest/v1/page_views`, {
      method:  'POST',
      headers: {
        'apikey':        supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type':  'application/json',
        'Prefer':        'return=minimal',
      },
      body: JSON.stringify({ path, country }),
    }).catch(() => {});
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};

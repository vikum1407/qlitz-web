import { NextRequest, NextResponse } from 'next/server';

function getRange(period: string): { from: string; to: string } {
  const now = new Date();
  const day = 24 * 60 * 60 * 1000;
  const fromMs: Record<string, number> = {
    today:  new Date().setHours(0, 0, 0, 0),
    '3days': Date.now() - 3  * day,
    week:   Date.now() - 7  * day,
    month:  Date.now() - 30 * day,
    year:   Date.now() - 365 * day,
  };
  return {
    from: new Date(fromMs[period] ?? fromMs.week).toISOString(),
    to:   now.toISOString(),
  };
}

export async function GET(req: NextRequest) {
  const sp     = new URL(req.url).searchParams;
  const period = sp.get('period') || 'week';
  const key    = sp.get('key') || '';

  if (!process.env.ADMIN_SECRET || key !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url     = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment variables.' },
      { status: 500 }
    );
  }

  const { from, to } = getRange(period);

  try {
    const res = await fetch(`${url}/rest/v1/rpc/get_analytics`, {
      method:  'POST',
      headers: {
        'apikey':        anonKey,
        'Authorization': `Bearer ${anonKey}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({ from_time: from, to_time: to }),
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('[admin/stats] Supabase error:', err);
      return NextResponse.json({ error: 'Failed to fetch analytics. Check Supabase setup.' }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({ data, period, from, to });
  } catch (e) {
    console.error('[admin/stats] fetch error:', e);
    return NextResponse.json({ error: 'Network error fetching analytics.' }, { status: 500 });
  }
}

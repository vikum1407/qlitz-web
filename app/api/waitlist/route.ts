import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email } = await req.json() as { name?: string; email?: string };

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const notifyEmail = process.env.CONTACT_EMAIL ?? 'info@qlitz.dev';

  try {
    await Promise.all([
      // Notify the team
      resend.emails.send({
        from: 'Qlitz Waitlist <noreply@qlitz.dev>',
        to: notifyEmail,
        subject: `New Waitlist Signup — ${name}`,
        html: `
          <div style="font-family:Inter,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8fafc;border-radius:12px;">
            <div style="background:linear-gradient(135deg,#3A7BFF,#8A3AFF);padding:24px;border-radius:10px;text-align:center;margin-bottom:24px;">
              <h1 style="color:#fff;font-size:20px;margin:0;">New Waitlist Signup</h1>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:20px;margin-bottom:16px;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Name</p>
              <p style="margin:0;font-size:16px;color:#0f172a;font-weight:600;">${name}</p>
            </div>
            <div style="background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:20px;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</p>
              <p style="margin:0;font-size:16px;color:#0f172a;font-weight:600;">${email}</p>
            </div>
          </div>
        `,
      }),
      // Confirm to the user
      resend.emails.send({
        from: 'Qlitz <noreply@qlitz.dev>',
        to: email,
        subject: "You're on the Qlitz waitlist",
        html: `
          <div style="font-family:Inter,sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;">
            <div style="background:linear-gradient(135deg,#3A7BFF,#8A3AFF);padding:32px 24px;border-radius:12px;text-align:center;margin-bottom:28px;">
              <h1 style="color:#fff;font-size:22px;margin:0 0 8px;">You're on the list, ${name.split(' ')[0]}!</h1>
              <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:0;">We'll reach out as soon as early access opens.</p>
            </div>
            <p style="color:#475569;font-size:15px;line-height:1.6;">
              Thank you for signing up for the Qlitz waitlist. We're building the next generation
              of AI-powered quality engineering tools and we're excited to have you with us.
            </p>
            <p style="color:#475569;font-size:15px;line-height:1.6;">
              In the meantime, follow our journey on
              <a href="https://www.linkedin.com/company/qlitz" style="color:#3A7BFF;">LinkedIn</a>
              for the latest updates and insights.
            </p>
            <p style="color:#94a3b8;font-size:13px;margin-top:32px;border-top:1px solid #e2e8f0;padding-top:16px;">
              Qlitz · <a href="https://qlitz.dev" style="color:#94a3b8;">qlitz.dev</a>
            </p>
          </div>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[waitlist]', err);
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}

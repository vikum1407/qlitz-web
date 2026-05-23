import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Qlitz Contact Form <noreply@qlitz.dev>',
    to: process.env.CONTACT_EMAIL ?? 'info@qlitz.dev',
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#3A7BFF,#8A3AFF);padding:32px 40px;">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">
                        New Contact Message
                      </h1>
                      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">
                        Received via qlitz.dev/contact
                      </p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:36px 40px;">

                      <!-- Sender details -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;overflow:hidden;">
                        <tr>
                          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
                            <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;font-weight:600;">Name</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#0f172a;font-weight:500;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:16px 20px;">
                            <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;font-weight:600;">Email</p>
                            <a href="mailto:${email}" style="margin:4px 0 0;display:block;font-size:16px;color:#3A7BFF;font-weight:500;text-decoration:none;">${email}</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Message -->
                      <p style="margin:0 0 10px;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#94a3b8;font-weight:600;">Message</p>
                      <div style="background:#f8fafc;border-left:3px solid #3A7BFF;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:32px;">
                        <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                      </div>

                      <!-- Reply CTA -->
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background:linear-gradient(135deg,#3A7BFF,#8A3AFF);border-radius:8px;">
                            <a href="mailto:${email}" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px;border-top:1px solid #e2e8f0;background:#f8fafc;">
                      <p style="margin:0;font-size:12px;color:#94a3b8;">
                        Sent from the Qlitz contact form · ${new Date().toUTCString()}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', JSON.stringify(error));
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

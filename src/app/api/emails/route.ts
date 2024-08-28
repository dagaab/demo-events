import EmailConfirmation from "@/emails/EmailConfirmation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dagi.abr@gmail.com',
        subject: 'Booking Confirmation',
        react: EmailConfirmation(),
      });
}

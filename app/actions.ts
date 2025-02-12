"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(name: string, email: string) {
  try {
    await resend.emails.send({
      from: "Analog Saunas <noreply@analogsauna.com>",
      to: "luke.moderwell@gmail.com", // Replace with your email
      subject: "New Sauna Planning Guide Request",
      html: `
        <h1>New Sauna Planning Guide Request</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      `,
    })
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email")
  }
}


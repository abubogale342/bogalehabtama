import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    require('dotenv').config()
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    // await transporter.verify();

    const { name, email, message } = await request.json()
    const mailData = {
      from: email,
      to: 'bogalehabtama@gmail.com',
      subject: `Message From ${name}`,
      text: message + ' | Sent from: ' + email,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    }

    await transporter.sendMail(mailData)
    return new NextResponse('Your email is sent succesfully.', {
      status: 200,
    })
  } catch (error: any) {
    return new NextResponse(error)
  }
}

import { MessageContactProductDataInterface } from "@/types"
import { templateContactProductHtml } from "@/utils/email/templateContactProductHtml";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

interface FormRequestInterface {
    messageData: MessageContactProductDataInterface
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as FormRequestInterface;
        const contentHtml = templateContactProductHtml(body.messageData)

        const transporter = nodemailer.createTransport({
            host: `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.NEXT_PUBLIC_STRONG_USERNAME}`,
                pass: `${process.env.NEXT_PUBLIC_STRONG_PASSWORD}`
            }
        });

        const mailOptions = {
            from: `STRONGWOOD ${process.env.NEXT_PUBLIC_STRONG_USERNAME}`,
            to: [`${process.env.NEXT_PUBLIC_STRONG_EMAIL_SENDER}`, body.messageData.email],
            subject: "Nueva venta",
            html: contentHtml,
        };

        const server = await new Promise((resolve, reject) => {
            transporter.verify(function (error: any, success: any) {
                if (success) {
                    resolve(success)
                }
                reject(error)
            })
        })
        if (!server) {
            return NextResponse.json({ message: "Error instantiating smtp transporter", status: 500 }, { status: 500 })
        }

        const success = await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions).then((info: any, err: any) => {
                if (info.response.includes('250')) {
                    resolve(true)
                }
                reject(err)
            })
        })
        if (!success) {
            return NextResponse.json({ message: "An error ocurred sending your email", status: 500 }, { status: 500 })
        }
        return NextResponse.json({ message: "Message sent", status: 200 }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Catch error", status: 500 }, { status: 500 });
    }

}
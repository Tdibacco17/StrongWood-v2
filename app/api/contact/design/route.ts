import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");


export async function POST(req: Request) {
    try {

        const body = await req.json();

        const contentHtml = `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO PEDIDO</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #555;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #555;
                font-weight: 500;
            }
    
            .order-summary {
                margin-bottom: 15px;
                color: #555;
            }
    
            .order-summary li {
                margin-bottom: 5px;
                color: #555;
            }
        
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                margin-bottom: 15px;
                text-align: left;
                padding-top: 20px;
            }

            .footer li {
                list-style-type: none;
                margin-bottom: 5px;
                color: #777;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>STRONG WOOD</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h3>Datos personales:</h3>
                    <ul>
                        <li><strong>Nombre: </strong>{name}</li>
                        <li><strong>Email: </strong><a href="mailto:{email}" class="link">{email}</a></li>
                        <li><strong>Teléfono: </strong><a href="https://wa.me/{phone}" class="link">{phone}</a></li>
                        <li><strong>Dirección: </strong>{direction}</li>
                    </ul>
                </div>
                <br></br>
                <div class="order-summary">
                    <h3>Resumen del pedido:</h3>
                    <ul>
                        <li><strong>Producto: </strong>{product}</li>
                        <li><strong>Abona en: </strong>{paymentMethod}</li>
                        <li><strong>Precio: </strong>{price}</li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <li><strong>Nota: </strong>{note}</li>
            </div>
        </div>
    </body>
    
    </html>
    `

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
            subject: "Prueba nodemailer!",
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
            return NextResponse.json({ message: "ERROR SERVER", status: 500 }, { status: 500 })
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
            return NextResponse.json({ message: "ERROR SUCCESS", status: 500 }, { status: 500 })
        }
        return NextResponse.json({ message: "OKEY", status: 200 }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "ERROR SERVER", status: 500 }, { status: 500 });
    }

}
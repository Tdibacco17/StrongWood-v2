import { MessageContactProductDataInterface } from "@/types"

export const templateContactProductHtml = (messageData:MessageContactProductDataInterface) =>{
    return `
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
                color: #3a3a3a;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #3a3a3a;
                font-weight: 500;
            }
    
            .order-summary {
                margin-bottom: 15px;
                color: #3a3a3a;
            }
    
            .order-summary li {
                margin-bottom: 5px;
                color: #3a3a3a;
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
                color: #3a3a3a;
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
                        <li><strong>Nombre: </strong>${messageData.name}</li>
                        <li><strong>Email: </strong><a href="mailto:{email}" class="link">${messageData.email}</a></li>
                        <li><strong>Teléfono: </strong><a href="https://wa.me/{phone}" class="link">${messageData.phone}</a></li>
                        <li><strong>Localidad: </strong>${messageData.location}</li>
                        <li><strong>Dirección: </strong>${messageData.direction}</li>
                    </ul>
                </div>
                <br></br>
                <div class="order-summary">
                    <h3>Resumen del pedido:</h3>
                    <ul>
                        <li><strong>Producto: </strong>${messageData.product}</li>
                        <li><strong>Abona en: </strong>${messageData.paymentMethod}</li>
                        <li><strong>Precio: </strong>${messageData.price}</li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <li><strong>Nota: </strong>${messageData.note}</li>
            </div>
        </div>
    </body>
    
    </html>
    `
}
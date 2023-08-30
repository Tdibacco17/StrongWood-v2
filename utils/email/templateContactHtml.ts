import { MessageContactDataInterface } from "@/types";

export const templateContactHtml = (messageData: MessageContactDataInterface) => {
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
        
            .link {
                color: #007bff;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>StrongWood</h1>
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
                        <li><strong>Nota: </strong>${messageData.note}</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}
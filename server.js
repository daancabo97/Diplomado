// Referencia funcionalidad: https://www.nodemailer.com/about/

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
app.post("/enviar-correo", async (req, res) => {
    const { name, email, message } = req.body;
  
try {    
  // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"Iron Maiden Web" <maddison53@ethereal.email>`, 
        to: "danielcaicedo285@gmail.com",        
        subject: "Mensaje desde el sitio de Iron Maiden", 
        text: message, 
        html: `
        <h3>Nuevo mensaje de la web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
        `,
    });

  console.log("Correo enviado: %s", info.messageId);
    res.status(200).json({ success: true, message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar:", error);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
});
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
  });

import nodemailer from 'nodemailer';
import { config } from '../config.js';

// 1- Configurar el transporter => ¿Quien lo envia?
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, 
    secure: true,
    auth: {
        user: config.email.email_user, 
        pass: config.email.email_pass  
    }
});

// 2- Función para enviar el correo manteniendo el nombre `sendCorreo`
const sendCorreo = async (to, subject, text, html) => {
    try {
        // Usamos el método sendMail de Nodemailer pero con el nombre de la función `sendCorreo`
        const info = await transporter.sendMail({
            from: '"CineMark" <antonysanz06@gmail.com>',  // Cambia esto con el correo desde el cual deseas enviar
            to,                                            // Dirección del destinatario
            subject,                                       // Asunto
            text,                                          // Cuerpo en texto
            html                                            // Cuerpo en HTML (opcional)
        });
        console.log("Correo enviado: " + info.response);
        return info;
    } catch (error) {
        console.log("Error sending email:", error);  // Imprimir el error detallado
        throw new Error("Error sending email: " + error.message);
    }
};

// 3- Función para generar el HTML del correo de recuperación de contraseña
const HTMLRecoveryEmail = (code) => {
    return `
      <div style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f9; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50; font-size: 24px; margin-bottom: 20px;">Password Recovery</h1>
        <p style="font-size: 16px; color: #555; line-height: 1.5;">
          Hello, we received a request to reset your password. Use the verification code below to proceed , Hola soy yo samuel:
        </p>
        <div style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 18px; font-weight: bold; color: #fff; background-color: #ff7f50; border-radius: 5px; border: 1px solid #e67e22;">
          ${code}
        </div>
        <p style="font-size: 14px; color: #777; line-height: 1.5;">
          This code is valid for the next <strong>15 minutes</strong>. If you didn’t request this email, you can safely ignore it.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <footer style="font-size: 12px; color: #aaa;">
          If you need further assistance, please contact our support team at
          <a href="mailto:support@example.com" style="color: #3498db; text-decoration: none;">support@example.com</a>.
        </footer>
      </div>
    `;
};

// Exportar las funciones
export { sendCorreo, HTMLRecoveryEmail };

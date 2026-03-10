import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    interest: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const body: ContactFormData = await request.json();
        const { name, email, interest, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Equimas Contacto <onboarding@resend.dev>', // Update this with verified domain later
            to: ['equimas.uruguay@gmail.com'], // Replace with actual destination email or business email
            subject: `Nuevo mensaje de contacto de ${name} - ${interest}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #000;">Nuevo Mensaje de Contacto</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Nombre:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interés:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${interest}</td>
                        </tr>
                    </table>
                    
                    <h3 style="margin-top: 30px; margin-bottom: 10px;">Mensaje:</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #000; white-space: pre-wrap;">
                        ${message}
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor al enviar el correo' },
            { status: 500 }
        );
    }
}

import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1042b10e5e5c8b",
      pass: "2e7ba38f6e8e79"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
      
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Gabriel <gabriel@gabriel.com>',
            to: 'Teste <teste@gmail.com>',
            subject,
            html: body,
        })
    }
}
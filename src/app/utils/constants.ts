import { ContactUsMessage } from '../models/message';

export class ContactUsConstants {
    static readonly defaultMessages: ContactUsMessage[] = [
        { name: 'Balamurugan', message: 'Hello there 👋', isMine: true },
        { name: 'Balamurugan', message: 'Your name?', isMine: true },
    ];

    static readonly askEmailMessage: ContactUsMessage = { name: 'Balamurugan', message: 'Your Email ID 📧?', isMine: true };
    static readonly askInfoMessage: ContactUsMessage = { name: 'Balamurugan', message: 'Your Message 💬?', isMine: true };
    static readonly thankYouMessage: ContactUsMessage = { name: 'Balamurugan', message: '🙏 Thank you for contacting Me 🙂. I will contact as soon as possible.', isMine: true };
}

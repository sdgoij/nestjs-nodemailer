import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MailerModule } from '../../../lib';

// transport: process.env.SMTP_URI || 'smtp://user:password@smtp.example.com',
// transport: {
//   streamTransport: true,
//   newline: 'unix',
// },
// transport: {
//   jsonTransport: true,
// },

@Module({
  imports: [
    MailerModule.forRoot({
      transport: process.env.SMTP_URI,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}

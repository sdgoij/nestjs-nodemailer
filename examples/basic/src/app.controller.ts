import { Body, Controller, Get, Post } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

import { MailerService, SendMailOptions } from '../../../lib';

@Controller()
export class AppController {
  constructor(private readonly mailer: MailerService) {}

  @Get() root(): string {
    return readFileSync(join(__dirname, '..', '..', '..', 'README.md')).toString();
  }

  @Post('mailer') send(@Body() options: SendMailOptions) {
    return this.mailer.sendMail({
      ...options,
      attachments: [
        { path: join(__dirname, '..', '..', '..', 'README.md'), filename: 'README.md' },
      ],
      replyTo: { address: 'user@example.com', name: 'User Example' },
    });
  }
}

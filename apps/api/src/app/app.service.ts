import { Injectable } from '@nestjs/common';
import { Message } from '@plastikaweb2020-full-stack/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}

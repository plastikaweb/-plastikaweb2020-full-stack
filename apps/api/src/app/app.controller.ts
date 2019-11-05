import { Controller, Get } from '@nestjs/common';

import { Message } from '@plastikaweb2020-full-stack/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}

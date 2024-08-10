import { Controller, Get } from '@nestjs/common';
import { AppService, AppService2 } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  exampleMethod() {
    return this.appService.getGreeting();
  }
}
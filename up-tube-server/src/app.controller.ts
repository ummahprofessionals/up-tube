import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  exampleMethod() {
    return this.appService.getGreeting();
  }

  @Post()
  updateMyData(@Body() data: FormData) {
    return {
      success: true,
      message: 'Your data has been successfully updated!',
    };
  }
}

interface FormData {
  username: string;
  password: string;
}

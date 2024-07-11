import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Iroot_return } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Iroot_return {
    return this.appService.getHello();
  }
}

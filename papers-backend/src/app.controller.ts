import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BuildEvent } from './modules/builder/BuildEvent.schema';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(
    private httpService: HttpService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('reset')
  async getReset() {
    return await this.appService.getReset();
  }

  @Post('event')
  async postEvent(@Body() event: BuildEvent) {
    try {
      return await this.appService.handleEvent(event);
    } catch (error) {
      return error;
    }
  }
}

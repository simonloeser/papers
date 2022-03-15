import { Injectable } from '@nestjs/common';
import { BuilderService } from './modules/builder/builder.service';

@Injectable()
export class AppService {
  constructor(private readonly modelBuilderService: BuilderService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getReset() {
    await this.modelBuilderService.reset();
    return 'Papers database is clear';
  }
}

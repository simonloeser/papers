import { Injectable } from '@nestjs/common';
import { BuilderService } from './modules/builder/builder.service';
import { BuildEvent } from './modules/builder/BuildEvent.schema';

@Injectable()
export class AppService {
  constructor(private readonly modelBuilderService: BuilderService) {}

  getHello(): string {
    return 'Nothing on this endpoint';
  }

  async handleEvent(event: BuildEvent) {
    return await this.modelBuilderService.storePaper(event);
  }

  async getReset() {
    await this.modelBuilderService.reset();
    return 'Papers database was cleared!';
  }
}

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

  async getQuery(key: string): Promise<any> {
    if (key === 'events') {
      return await this.modelBuilderService.getBuildEvents();
    } else if (key === 'users') {
      return await this.modelBuilderService.getUsers();
    } else if (key === 'papers') {
      return await this.modelBuilderService.getPapers();
    } else {
      return { error: 'Papers-backend error: unknown key: ' + key };
    }
  }

  async getReset() {
    await this.modelBuilderService.reset();
    return 'Papers database was cleared!';
  }
}

import { Module } from '@nestjs/common';
import { BuilderService } from './builder.service';

@Module({
  providers: [BuilderService]
})
export class BuilderModule {}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuilderService } from './builder.service';
import { BuildEventSchema } from './BuildEvent.schema';
import { UserSchema } from './user.schema';
import { PaperSchema } from './paper.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'eventStore', schema: BuildEventSchema },
      { name: 'paper', schema: PaperSchema },
      { name: 'user', schema: UserSchema },
    ]),
  ],
  providers: [BuilderService],
  exports: [BuilderService],
})
export class BuilderModule {}

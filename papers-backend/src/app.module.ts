import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuilderModule } from './modules/builder/builder.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot(
      // Please don't steal my insanely cool database!! Thank you :)
      'mongodb+srv://loeser:191289191289@papers.j4xbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    BuilderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

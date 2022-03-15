import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BuildEvent {
  @Prop({ required: true })
  eventType: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true, type: MongooseSchema.Types.Mixed })
  payload: any;
}

export const BuildEventSchema = SchemaFactory.createForClass(BuildEvent);

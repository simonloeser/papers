import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Paper {
  @Prop({ required: true })
  name: string;
}

export const ProductSchema = SchemaFactory.createForClass(Paper);

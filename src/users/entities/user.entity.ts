
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: String;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
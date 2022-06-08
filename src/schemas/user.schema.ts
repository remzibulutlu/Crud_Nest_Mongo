import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;
  @Prop()
  surname: string;
  @Prop()
  age: number;
}


export const UserSchema = SchemaFactory.createForClass(Users);
import { Param } from '@nestjs/common';
import { IsNumber, IsObject } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {

    @IsObject()
    _id: ObjectId;
}

export class FindOneParams {
  @IsObject()
  _id: ObjectId;
}

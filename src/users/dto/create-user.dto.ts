import { Param } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name: string;
}

import { IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  name: string;
}
